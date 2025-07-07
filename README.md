# A6 Build Docs AutoRAG MCP Server

This MCP (Model Context Protocol) server provides intelligent access to the A6 Build Docs knowledge bases through Cloudflare's AutoRAG service. Search for documentation, guides, processes, and implementation details using natural language queries with advanced folder-based filtering.

## 🚀 Features

- **Intelligent Multi-Knowledge Base Search**: Access A6 Build Docs content across multiple knowledge domains using natural language
- **Folder-Based Filtering**: Search within specific folders (e.g., Greenhouse, Security, API) for targeted results
- **Fast Document Search**: Returns raw document results with metadata for quick access to source content
- **Flexible AutoRAG Support**: Works with any AutoRAG instance, pre-configured for A6 Build Docs
- **Advanced Filtering**: Control result quality and quantity with configurable parameters
- **Comprehensive Error Handling**: Detailed troubleshooting guidance for common issues

## 📦 Deployment Information

**Server URL**: `https://vads-mcp.a6lab.ai/sse`  
**Account**: AgileSix Cloudflare Account  
**AutoRAG Instance**: `a6-build-docs-rag`  
**R2 Data Source**: `a6-build-docs` bucket  
**Primary Knowledge Base**: `Greenhouse/` folder (with additional folders planned)

## 🛠️ Adding to Cursor IDE

### Step 1: Create MCP Configuration File

Create or edit the MCP configuration file in your home directory:

**macOS/Linux:**
```bash
~/.cursor/mcp.json
```

**Windows:**
```bash
%USERPROFILE%\.cursor\mcp.json
```

### Step 2: Add Server Configuration

Add the following configuration to your `mcp.json` file:

```json
{
  "mcpServers": {
    "a6-build-docs": {
      "url": "https://vads-mcp.a6lab.ai/sse"
    }
  }
}
```

### Step 3: Restart Cursor

1. Close Cursor completely
2. Reopen Cursor
3. The A6 Build Docs MCP server will be automatically connected

### Step 4: Verify Connection

1. Open Cursor Settings → Features → MCP
2. You should see "a6-build-docs" in your MCP servers list
3. Click the refresh button if needed to populate the tool list

## 🔧 Available Tools

### `searchDesignSystem`

Search the A6 Build Docs knowledge base using natural language queries. This is the primary tool for general searches across all documentation.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **query** | `string` (required) | - | Your search query about A6 Build Docs content, documentation, guides, or any content in the knowledge base.<br/>**Examples:** "How do I implement feature X?", "What are the deployment requirements?", "Project documentation for Y" |
| **autoragId** | `string` | `"a6-build-docs-rag"` | AutoRAG instance identifier. Use `"a6-build-docs-rag"` for A6 Build Docs.<br/>This determines which knowledge base gets searched. |
| **maxResults** | `number` | `10` | Maximum document chunks to retrieve (1-50).<br/>**Recommended:** 5-15 for specific questions, 20-50 for research |
| **scoreThreshold** | `number` | `0.3` | Minimum similarity score (0.0-1.0) for results:<br/>• `0.7-1.0`: High precision, very relevant matches<br/>• `0.5-0.7`: Balanced precision and recall (recommended)<br/>• `0.3-0.5`: High recall, broader results<br/>• `0.0-0.3`: Very broad searches |

### `searchGreenhouse`

Search specifically within the Greenhouse folder for HR-related documentation, processes, and guides.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **query** | `string` (required) | - | Your search query for Greenhouse-related content.<br/>**Examples:** "How do I set up Greenhouse integration?", "Greenhouse API documentation", "Interview process in Greenhouse" |
| **maxResults** | `number` | `10` | Maximum document chunks to retrieve from the Greenhouse folder (1-50). |
| **scoreThreshold** | `number` | `0.3` | Minimum similarity score (0.0-1.0) for including results. |

### `searchAllKnowledgeBases`

Generic search across all knowledge bases with optional folder filtering. Most flexible tool for comprehensive searches.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **query** | `string` (required) | - | Your search query across all knowledge bases.<br/>**Examples:** "How do I deploy applications?", "Security guidelines", "API documentation" |
| **folderPath** | `string` (optional) | - | Optional folder path to filter results. If specified, only documents within this folder will be searched.<br/>**Examples:** "Greenhouse", "Security", "API". Leave empty to search all folders. |
| **maxResults** | `number` | `15` | Maximum document chunks to retrieve across all knowledge bases (1-50). |
| **scoreThreshold** | `number` | `0.3` | Minimum similarity score (0.0-1.0) for including results. |

## 📋 Example Queries

### General Documentation
- "How do I implement feature X in the A6 Build system?"
- "What are the deployment requirements for A6 applications?"
- "Security guidelines for A6 Build projects"

### Greenhouse-Specific Queries
- "How do I set up Greenhouse integration?"
- "Greenhouse API documentation and examples"
- "Interview process workflow in Greenhouse"

### Folder-Filtered Searches
- "API documentation" (using `searchAllKnowledgeBases` with `folderPath: "API"`)
- "Security protocols" (using `searchAllKnowledgeBases` with `folderPath: "Security"`)
- "Deployment guides" (using `searchAllKnowledgeBases` with `folderPath: "Deployment"`)

## 🔍 Search Results

All tools return raw search results optimized for fast access to source content:

**Returns:**
- Document chunks with similarity scores
- Source metadata (file names, sections, folder paths)
- Direct access to original A6 Build Docs content
- Fast response times for efficient browsing

**Best for:** Quick fact-finding, browsing source documentation, getting precise snippets, and maintaining direct access to the original A6 Build Docs materials.

## 🚨 Troubleshooting

### Connection Issues
- **Server not appearing in Cursor**: Verify the `mcp.json` file syntax and restart Cursor
- **Tools not loading**: Click the refresh button next to the server in Cursor's MCP settings
- **SSE connection failures**: Check your internet connection and verify the server URL

### Search Issues
- **No results found**: Try lowering the `scoreThreshold` (e.g., 0.2-0.3)
- **Too many irrelevant results**: Increase the `scoreThreshold` (e.g., 0.6-0.8)
- **AutoRAG errors**: Verify the `autoragId` is correct (`a6-build-docs-rag` for A6 Build Docs)
- **Folder filtering not working**: Verify the folder path exists in the knowledge base

### Performance Tips
- Start with `maxResults: 10-15` and adjust based on your needs
- Use specific queries for better results ("Greenhouse API setup" vs "Greenhouse")
- Lower `scoreThreshold` values (0.2-0.3) for broader searches when exploring
- Higher `scoreThreshold` values (0.6-0.8) for precise, targeted results
- Use `searchGreenhouse` for HR-related queries to get more focused results
- Use `searchAllKnowledgeBases` with `folderPath` for domain-specific searches

## 🏗️ Technical Architecture

### Components Used
- **Cloudflare Workers**: Serverless hosting platform
- **AutoRAG**: Managed RAG pipeline for document search
- **R2 Storage**: Document storage (`a6-build-docs` bucket)
- **Workers AI**: Embedding and generation models
- **MCP Protocol**: Standardized AI tool integration

### Folder-Based Organization
- **Greenhouse/**: HR processes, interview guides, API documentation
- **[Additional folders]**: To be organized based on specific use cases and knowledge domains
- **Metadata Filtering**: Uses "starts with" pattern for hierarchical folder filtering
- **Multitenancy**: Leverages Cloudflare AutoRAG's folder-based separation

### Security Features
- **Server-Sent Events (SSE)**: Secure, real-time communication
- **Scoped Permissions**: Access limited to A6 Build Docs knowledge bases
- **Error Handling**: Comprehensive error messages and troubleshooting

## 📚 Related Resources

- [A6 Build Docs Official Documentation](https://build.agile6.com/)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [Cursor IDE MCP Documentation](https://docs.cursor.com/mcp)
- [Cloudflare AutoRAG Documentation](https://developers.cloudflare.com/autorag/)

## 🆘 Support

For issues specific to this MCP server:
1. Check the troubleshooting section above
2. Verify your Cursor and MCP configuration
3. Test with simple queries first ("Greenhouse documentation")
4. Review Cursor's MCP documentation for general setup issues

For A6 Build Docs content questions, refer to the [official A6 Build Docs resources](https://build.agile6.com/).

---

**Deployed Version**: 1.0.0  
**Last Updated**: January 2025  
**Maintained by**: AgileSix Team
