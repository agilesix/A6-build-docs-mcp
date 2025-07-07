# Adding New Tools to A6 Build Docs AutoRAG MCP Server

This guide explains how to add new tools to the MCP server using the clean, SOLID architecture.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Quick Start: Adding a New Tool](#quick-start-adding-a-new-tool)
3. [Tool Implementation Guide](#tool-implementation-guide)
4. [R2 Bucket Structure](#r2-bucket-structure)
5. [Best Practices](#best-practices)
6. [Examples](#examples)
7. [Testing](#testing)

## Architecture Overview

The MCP server follows SOLID principles with clean separation of concerns:

```
src/
├── server/              # MCP server configuration
├── tools/               # Tool implementations
│   ├── base/           # Base classes and interfaces
│   ├── greenhouse/     # Greenhouse-specific tools
│   ├── universal/      # Universal/cross-cutting tools
│   └── index.ts        # Tool registry (ADD NEW TOOLS HERE)
├── services/           # Business logic services
│   ├── AutoragService  # AutoRAG API interactions
│   └── FilterService   # Folder filtering logic
└── utils/              # Shared utilities and constants
```

## Quick Start: Adding a New Tool

### 1. Create Your Tool Class

Create a new file in the appropriate folder under `src/tools/`:

```typescript
// src/tools/security/SecuritySearchTool.ts
import { z } from "zod";
import { BaseTool } from "../base/BaseTool.js";
import { ToolContext } from "../base/types.js";
import { ToolResponse } from "../../utils/types.js";
import { DEFAULT_AUTORAG_ID, DEFAULT_MAX_RESULTS, DEFAULT_SCORE_THRESHOLD, MAX_AUTORAG_RESULTS } from "../../utils/constants.js";

export class SecuritySearchTool extends BaseTool {
  readonly name = "searchSecurity";
  readonly description = "Search security documentation, policies, and compliance guides.";

  getSchema() {
    return {
      query: z.string().min(1).describe("Your security-related search query"),
      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(DEFAULT_MAX_RESULTS).describe("Maximum results (up to 20)"),
      scoreThreshold: z.number().min(0).max(1).default(DEFAULT_SCORE_THRESHOLD).describe("Minimum similarity score")
    };
  }

  async execute(params: any, context: ToolContext): Promise<ToolResponse> {
    const { query, maxResults, scoreThreshold } = params;
    
    const results = await this.autoragService.searchInFolder(
      {
        query,
        maxResults,
        scoreThreshold,
        autoragId: DEFAULT_AUTORAG_ID
      },
      "Security" // This must match your R2 bucket folder structure
    );
    
    const resultCount = this.getResultCount(results);
    return this.formatResults(results, resultCount, "within Security folder");
  }
}
```

### 2. Register Your Tool

Add your tool to the registry in `src/tools/index.ts`:

```typescript
// src/tools/index.ts
import { SecuritySearchTool } from "./security/SecuritySearchTool.js";

export function createTools(context: ToolContext): ToolRegistry {
  const tools = new Map<string, BaseTool>();
  
  const toolClasses = [
    GreenhouseSearchTool,
    UniversalSearchTool,
    SecuritySearchTool,  // ADD YOUR TOOL HERE
    // Add more tools here...
  ];
  
  // ... rest of the function
}
```

### 3. Done!

Your tool is now automatically registered and available. The server will:
- ✅ Automatically register it with the MCP server
- ✅ Handle errors gracefully
- ✅ Provide consistent response formatting
- ✅ Include proper parameter validation

## Tool Implementation Guide

### Base Tool Class

All tools extend `BaseTool` which provides:

- **Error handling**: Automatic error catching and formatting
- **Result formatting**: Consistent response structure
- **AutoRAG service**: Pre-configured service for AutoRAG interactions
- **Helper methods**: Common utilities for result processing

### Required Methods

```typescript
export class YourTool extends BaseTool {
  // Required: Unique tool name
  readonly name = "yourToolName";
  
  // Required: Description for MCP clients
  readonly description = "What your tool does";

  // Required: Define parameters using Zod schemas
  getSchema() {
    return {
      param1: z.string().describe("Description for param1"),
      param2: z.number().optional().describe("Optional parameter"),
    };
  }

  // Required: Main tool logic
  async execute(params: any, context: ToolContext): Promise<ToolResponse> {
    // Your implementation here
  }
}
```

### Available Services

Your tool has access to these services through the base class:

```typescript
// AutoRAG searches
const results = await this.autoragService.search(options);
const results = await this.autoragService.searchInFolder(options, "FolderName");
const results = await this.autoragService.searchAll(options);

// Helper methods
const count = this.getResultCount(results);
const response = this.formatResults(results, count, "scope description");
const errorResponse = this.formatError(error, "context");
```

## R2 Bucket Structure

Your AutoRAG knowledge base in R2 should be organized hierarchically:

```
a6-build-docs-rag/
├── Greenhouse/
│   ├── harvest-api-complete.txt        # Full Greenhouse Harvest API documentation
│   ├── authentication.md              # API authentication methods
│   ├── endpoints/
│   │   ├── candidates.md              # Candidate endpoints
│   │   ├── applications.md            # Application endpoints
│   │   └── jobs.md                    # Job endpoints
│   └── examples/
│       ├── curl-examples.md           # cURL usage examples
│       └── ruby-examples.md           # Ruby SDK examples
├── Security/
│   ├── security-policies.md
│   ├── compliance-guides.md
│   └── audit-procedures.md
├── API/
│   ├── rest-api-docs.md
│   ├── graphql-schema.md
│   └── authentication.md
└── Infrastructure/
    ├── deployment-guides.md
    ├── monitoring-setup.md
    └── troubleshooting.md
```

### Folder Metadata

Each document should have a `folder` metadata field:

```json
{
  "folder": "Security/",
  "title": "Security Policy Document",
  "content": "..."
}
```

## Best Practices

### 1. Folder Organization

- Create logical, hierarchical folder structures
- Use consistent naming conventions
- Keep folder names short but descriptive
- Avoid deep nesting (max 2-3 levels)
- Note: The Greenhouse folder contains Harvest API documentation from https://developers.greenhouse.io/harvest.html

### 2. Tool Naming

- Use descriptive, action-oriented names: `searchSecurity`, `findDeploymentGuide`
- Follow camelCase convention
- Include the action verb (search, find, get, etc.)

### 3. Parameter Design

- Provide sensible defaults
- Include helpful descriptions
- Use appropriate validation (min/max values, max 20 for AutoRAG)
- Consider the end user's mental model

### 4. Error Messages

- Be specific about what went wrong
- Provide actionable troubleshooting steps
- Include context about the search scope

### 5. Documentation

- Write clear, concise tool descriptions
- Include practical examples in parameter descriptions
- Document any special behavior or limitations

## Examples

### Simple Folder-Specific Tool

```typescript
export class APIDocsSearchTool extends BaseTool {
  readonly name = "searchAPIDocs";
  readonly description = "Search API documentation and integration guides.";

  getSchema() {
    return {
      query: z.string().min(1).describe("API-related search query"),
      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(10).describe("Maximum results (up to 20)"),
      scoreThreshold: z.number().min(0).max(1).default(0.3).describe("Minimum similarity score")
    };
  }

  async execute(params: any, context: ToolContext): Promise<ToolResponse> {
    const { query, maxResults, scoreThreshold } = params;
    
    const results = await this.autoragService.searchInFolder(
      { query, maxResults, scoreThreshold, autoragId: DEFAULT_AUTORAG_ID },
      "API"
    );
    
    return this.formatResults(results, this.getResultCount(results), "in API documentation");
  }
}
```

### Advanced Tool with Custom Logic

```typescript
export class InfrastructureSearchTool extends BaseTool {
  readonly name = "searchInfrastructure";
  readonly description = "Search infrastructure documentation with environment-specific filtering.";

  getSchema() {
    return {
      query: z.string().min(1).describe("Infrastructure-related search query"),
      environment: z.enum(["dev", "staging", "prod", "all"]).default("all").describe("Environment filter"),
      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(15).describe("Maximum results (up to 20)"),
      scoreThreshold: z.number().min(0).max(1).default(0.3).describe("Minimum similarity score")
    };
  }

  async execute(params: any, context: ToolContext): Promise<ToolResponse> {
    const { query, environment, maxResults, scoreThreshold } = params;
    
    // Add environment-specific filtering to the query
    const environmentQuery = environment === "all" 
      ? query 
      : `${query} environment:${environment}`;
    
    const results = await this.autoragService.searchInFolder(
      { 
        query: environmentQuery, 
        maxResults, 
        scoreThreshold, 
        autoragId: DEFAULT_AUTORAG_ID 
      },
      "Infrastructure"
    );
    
    const scopeText = environment === "all" 
      ? "across all environments" 
      : `for ${environment} environment`;
    
    return this.formatResults(results, this.getResultCount(results), scopeText);
  }
}
```

### Multi-Folder Tool

```typescript
export class ComplianceSearchTool extends BaseTool {
  readonly name = "searchCompliance";
  readonly description = "Search compliance documentation across Security and Legal folders.";

  getSchema() {
    return {
      query: z.string().min(1).describe("Compliance-related search query"),
      scope: z.enum(["security", "legal", "both"]).default("both").describe("Search scope"),
      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(20).describe("Maximum results (up to 20)"),
      scoreThreshold: z.number().min(0).max(1).default(0.3).describe("Minimum similarity score")
    };
  }

  async execute(params: any, context: ToolContext): Promise<ToolResponse> {
    const { query, scope, maxResults, scoreThreshold } = params;
    
    const searchOptions = { query, maxResults, scoreThreshold, autoragId: DEFAULT_AUTORAG_ID };
    
    let results;
    let scopeText;
    
    switch (scope) {
      case "security":
        results = await this.autoragService.searchInFolder(searchOptions, "Security");
        scopeText = "in Security documentation";
        break;
      case "legal":
        results = await this.autoragService.searchInFolder(searchOptions, "Legal");
        scopeText = "in Legal documentation";
        break;
      case "both":
        // Note: This would require custom implementation to merge results
        // For now, search all folders
        results = await this.autoragService.searchAll(searchOptions);
        scopeText = "across Security and Legal documentation";
        break;
    }
    
    return this.formatResults(results, this.getResultCount(results), scopeText);
  }
}
```

## Testing

### 1. Local Testing

Use the MCP inspector to test your tools:

```bash
# Start your development server
npm run dev

# In another terminal, start the MCP inspector
npx @modelcontextprotocol/inspector@latest

# Connect to: http://localhost:8787/sse
```

### 2. Tool Testing Checklist

- [ ] Tool appears in "List Tools" 
- [ ] All parameters are properly validated
- [ ] Error handling works correctly
- [ ] Results are formatted consistently
- [ ] Folder filtering works as expected
- [ ] Performance is acceptable

### 3. Integration Testing

Test your tool with various queries:

```typescript
// Test cases to consider:
// - Empty results
// - Large result sets
// - Invalid parameters
// - Network errors
// - Permission errors
```

## Deployment

After adding your tool:

1. **Lint and build**: `npm run lint && npm run build`
2. **Deploy**: `npm run deploy`
3. **Test**: Use MCP inspector with your production URL
4. **Document**: Update your main README if needed

## Troubleshooting

### Common Issues

1. **Tool not appearing**: Check the tool registry in `src/tools/index.ts`
2. **Import errors**: Ensure all imports use `.js` extensions
3. **Type errors**: Make sure your tool extends `BaseTool` correctly
4. **Folder filtering not working**: Verify R2 bucket structure and metadata
5. **Performance issues**: Consider adjusting `maxResults` defaults

### Debug Mode

Enable debug logging by adding console.log statements in your tool:

```typescript
async execute(params: any, context: ToolContext): Promise<ToolResponse> {
  console.log("Tool executed with params:", params);
  // ... rest of implementation
}
```

---

## Summary

Adding new tools is simple:

1. **Create** a tool class extending `BaseTool`
2. **Register** it in `src/tools/index.ts`
3. **Test** with the MCP inspector
4. **Deploy** and verify

The architecture handles all the complexity of MCP server management, error handling, and response formatting, so you can focus on implementing your tool's specific functionality.

For questions or issues, refer to the main project documentation or create an issue in the repository. 