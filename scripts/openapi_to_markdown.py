#!/usr/bin/env python3
"""Convert OpenAPI YAML spec to Markdown for AutoRAG indexing."""

import yaml
import sys
from pathlib import Path


def format_schema(schema, schemas, indent=0):
    """Format a schema object as markdown."""
    if not schema:
        return ""

    # Handle $ref
    if "$ref" in schema:
        ref_name = schema["$ref"].split("/")[-1]
        return f"`{ref_name}`"

    schema_type = schema.get("type", "object")

    if schema_type == "array":
        items = schema.get("items", {})
        return f"Array of {format_schema(items, schemas, indent)}"

    if schema_type == "object" and "properties" in schema:
        props = []
        for name, prop in schema.get("properties", {}).items():
            prop_type = prop.get("type", "any")
            desc = prop.get("description", "")
            props.append(f"  - `{name}` ({prop_type}): {desc}")
        return "\n".join(props) if props else "object"

    return schema_type


def convert_openapi_to_markdown(yaml_path, output_path):
    """Convert OpenAPI YAML to Markdown."""
    with open(yaml_path, "r") as f:
        spec = yaml.safe_load(f)

    md_lines = []

    # Title and info
    info = spec.get("info", {})
    md_lines.append(f"# {info.get('title', 'API Documentation')}")
    md_lines.append("")
    md_lines.append(f"**Version:** {info.get('version', 'N/A')}")
    md_lines.append("")
    if info.get("description"):
        md_lines.append(info["description"])
        md_lines.append("")
    if info.get("contact"):
        md_lines.append(f"**Contact:** {info['contact']}")
        md_lines.append("")

    # Servers
    servers = spec.get("servers", [])
    if servers:
        md_lines.append("## Servers")
        md_lines.append("")
        for server in servers:
            md_lines.append(f"- `{server.get('url', '')}` - {server.get('description', '')}")
        md_lines.append("")

    # Authentication
    security_schemes = spec.get("components", {}).get("securitySchemes", {})
    if security_schemes:
        md_lines.append("## Authentication")
        md_lines.append("")
        for name, scheme in security_schemes.items():
            md_lines.append(f"### {name}")
            md_lines.append("")
            md_lines.append(f"- **Type:** {scheme.get('type', 'N/A')}")
            if scheme.get("scheme"):
                md_lines.append(f"- **Scheme:** {scheme['scheme']}")
            if scheme.get("in"):
                md_lines.append(f"- **In:** {scheme['in']}")
            if scheme.get("name"):
                md_lines.append(f"- **Name:** {scheme['name']}")
            if scheme.get("description"):
                md_lines.append(f"- **Description:** {scheme['description']}")
            md_lines.append("")

    # Paths/Endpoints
    paths = spec.get("paths", {})
    schemas = spec.get("components", {}).get("schemas", {})

    # Group by tags
    tags_map = {}
    for path, methods in paths.items():
        for method, details in methods.items():
            if method in ["get", "post", "put", "patch", "delete"]:
                tags = details.get("tags", ["Other"])
                for tag in tags:
                    if tag not in tags_map:
                        tags_map[tag] = []
                    tags_map[tag].append((path, method, details))

    md_lines.append("## Endpoints")
    md_lines.append("")

    for tag in sorted(tags_map.keys()):
        md_lines.append(f"### {tag.replace('-', ' ').title()}")
        md_lines.append("")

        for path, method, details in tags_map[tag]:
            operation_id = details.get("operationId", "")
            summary = details.get("summary", "")
            description = details.get("description", "")

            md_lines.append(f"#### `{method.upper()}` {path}")
            md_lines.append("")

            if operation_id:
                md_lines.append(f"**Operation ID:** `{operation_id}`")
                md_lines.append("")

            if summary:
                md_lines.append(f"**Summary:** {summary}")
                md_lines.append("")

            if description:
                md_lines.append(description)
                md_lines.append("")

            # Parameters
            params = details.get("parameters", [])
            if params:
                md_lines.append("**Parameters:**")
                md_lines.append("")
                md_lines.append("| Name | In | Type | Required | Description |")
                md_lines.append("|------|-----|------|----------|-------------|")
                for param in params:
                    name = param.get("name", "")
                    location = param.get("in", "")
                    required = "Yes" if param.get("required") else "No"
                    desc = param.get("description", "").replace("\n", " ").replace("|", "\\|")
                    schema = param.get("schema", {})
                    param_type = schema.get("type", "string")
                    if "enum" in schema:
                        param_type = f"enum: {', '.join(str(e) for e in schema['enum'][:5])}"
                        if len(schema['enum']) > 5:
                            param_type += "..."
                    md_lines.append(f"| `{name}` | {location} | {param_type} | {required} | {desc[:100]} |")
                md_lines.append("")

            # Request Body
            request_body = details.get("requestBody", {})
            if request_body:
                md_lines.append("**Request Body:**")
                md_lines.append("")
                content = request_body.get("content", {})
                for content_type, content_details in content.items():
                    schema = content_details.get("schema", {})
                    md_lines.append(f"- Content-Type: `{content_type}`")
                    md_lines.append(f"- Schema: {format_schema(schema, schemas)}")
                md_lines.append("")

            # Responses
            responses = details.get("responses", {})
            if responses:
                md_lines.append("**Responses:**")
                md_lines.append("")
                for code, response in responses.items():
                    desc = response.get("description", "")
                    md_lines.append(f"- **{code}:** {desc}")
                    content = response.get("content", {})
                    for content_type, content_details in content.items():
                        schema = content_details.get("schema", {})
                        md_lines.append(f"  - Content-Type: `{content_type}`")
                        md_lines.append(f"  - Schema: {format_schema(schema, schemas)}")
                md_lines.append("")

            md_lines.append("---")
            md_lines.append("")

    # Schemas/Models
    if schemas:
        md_lines.append("## Schemas")
        md_lines.append("")

        for name, schema in schemas.items():
            md_lines.append(f"### {name}")
            md_lines.append("")

            if schema.get("description"):
                md_lines.append(schema["description"])
                md_lines.append("")

            schema_type = schema.get("type", "object")
            md_lines.append(f"**Type:** {schema_type}")
            md_lines.append("")

            # Properties
            properties = schema.get("properties", {})
            required_fields = schema.get("required", [])

            if properties:
                md_lines.append("**Properties:**")
                md_lines.append("")
                md_lines.append("| Property | Type | Required | Description |")
                md_lines.append("|----------|------|----------|-------------|")

                for prop_name, prop_details in properties.items():
                    prop_type = prop_details.get("type", "")
                    if "$ref" in prop_details:
                        prop_type = f"`{prop_details['$ref'].split('/')[-1]}`"
                    elif prop_type == "array":
                        items = prop_details.get("items", {})
                        if "$ref" in items:
                            prop_type = f"array of `{items['$ref'].split('/')[-1]}`"
                        else:
                            prop_type = f"array of {items.get('type', 'any')}"

                    is_required = "Yes" if prop_name in required_fields else "No"
                    desc = prop_details.get("description", "").replace("\n", " ").replace("|", "\\|")[:100]

                    md_lines.append(f"| `{prop_name}` | {prop_type} | {is_required} | {desc} |")

                md_lines.append("")

            # Enum values
            if "enum" in schema:
                md_lines.append("**Enum Values:**")
                md_lines.append("")
                for val in schema["enum"]:
                    md_lines.append(f"- `{val}`")
                md_lines.append("")

            md_lines.append("---")
            md_lines.append("")

    # Write output
    with open(output_path, "w") as f:
        f.write("\n".join(md_lines))

    print(f"Converted {yaml_path} to {output_path}")
    print(f"Output size: {Path(output_path).stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python openapi_to_markdown.py <input.yaml> <output.md>")
        sys.exit(1)

    convert_openapi_to_markdown(sys.argv[1], sys.argv[2])
