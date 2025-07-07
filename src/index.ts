import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/**
 * A6 Build Docs AutoRAG MCP Server
 * 
 * This MCP server provides access to AutoRAG knowledge bases through
 * Cloudflare's AutoRAG service. It supports folder-based organization
 * for accessing multiple knowledge bases within the A6 Build Docs system.
 */
export class MyMCP extends McpAgent<Env> {
  server = new McpServer({
    name: "A6 Build Docs AutoRAG MCP Server", 
    version: "1.0.0"
  });

  /**
   * Private method to search with folder filtering
   * Uses "starts with" pattern for hierarchical folder filtering
   */
  private async searchWithFolderFilter({
    query,
    folderPath,
    maxResults,
    scoreThreshold,
    autoragId
  }: {
    query: string;
    folderPath?: string;
    maxResults: number;
    scoreThreshold: number;
    autoragId: string;
  }) {
    const searchOptions: any = {
      query,
      rewrite_query: true,
      max_num_results: maxResults,
      ranking_options: {
        score_threshold: scoreThreshold
      }
    };

    // Add folder filtering if specified
    if (folderPath) {
      searchOptions.filters = {
        type: "and",
        filters: [
          { type: "gte", key: "folder", value: `${folderPath}/` },
          { type: "lte", key: "folder", value: `${folderPath}/z` }
        ]
      };
    }

    return await this.env.AI.autorag(autoragId).search(searchOptions);
  }

  async init() {
    // Search specifically within Greenhouse folder
    this.server.tool(
      "searchGreenhouse",
      {
        query: z.string().min(1).describe(
          "Your search query for Greenhouse-related content. Can be questions about Greenhouse documentation, " +
          "processes, guides, or any content within the Greenhouse knowledge base. " +
          "Examples: 'How do I set up Greenhouse integration?', 'Greenhouse API documentation', 'Interview process in Greenhouse'"
        ),
        
        maxResults: z.number().min(1).max(50).default(10).describe(
          "Maximum number of document chunks to retrieve from the Greenhouse folder. " +
          "Recommended: 5-15 for specific questions, 20-50 for comprehensive research."
        ),
        
        scoreThreshold: z.number().min(0).max(1).default(0.3).describe(
          "Minimum similarity score (0.0 to 1.0) for including results. " +
          "Higher values = more precise results, lower values = broader results."
        )
      },
      async ({ query, maxResults, scoreThreshold }) => {
        try {
          const results = await this.searchWithFolderFilter({
            query,
            folderPath: "Greenhouse",
            maxResults,
            scoreThreshold,
            autoragId: "a6-build-docs-rag"
          });
          
          const resultCount = Array.isArray(results) ? results.length : 'Unknown number of';
          return {
            content: [{ 
              type: "text", 
              text: `**Greenhouse Search Results (${resultCount} documents found):**\n\n${JSON.stringify(results, null, 2)}` 
            }],
          };
          
        } catch (error) {
          return {
            content: [{ 
              type: "text", 
              text: `**Error searching Greenhouse folder:**\n\n${error instanceof Error ? error.message : String(error)}\n\n**Troubleshooting:**\n- Verify the Greenhouse folder exists in the knowledge base\n- Check if the knowledge base has finished indexing\n- Try a simpler query or adjust the score threshold` 
            }],
          };
        }
      }
    );

    // Search across all knowledge bases with optional folder filtering
    this.server.tool(
      "searchAllKnowledgeBases",
      {
        query: z.string().min(1).describe(
          "Your search query across all knowledge bases. Can be questions about any content " +
          "in the A6 Build Docs system. Examples: 'How do I deploy applications?', 'Security guidelines', 'API documentation'"
        ),
        
        folderPath: z.string().optional().describe(
          "Optional folder path to filter results. If specified, only documents within this folder " +
          "will be searched. Examples: 'Greenhouse', 'Security', 'API'. Leave empty to search all folders."
        ),
        
        maxResults: z.number().min(1).max(50).default(15).describe(
          "Maximum number of document chunks to retrieve across all knowledge bases. " +
          "Recommended: 10-20 for broad searches, 30-50 for comprehensive research."
        ),
        
        scoreThreshold: z.number().min(0).max(1).default(0.3).describe(
          "Minimum similarity score (0.0 to 1.0) for including results. " +
          "Lower values cast a wider net, higher values return more precise matches."
        )
      },
      async ({ query, folderPath, maxResults, scoreThreshold }) => {
        try {
          const results = await this.searchWithFolderFilter({
            query,
            folderPath,
            maxResults,
            scoreThreshold,
            autoragId: "a6-build-docs-rag"
          });
          
          const resultCount = Array.isArray(results) ? results.length : 'Unknown number of';
          const scopeText = folderPath ? `within ${folderPath} folder` : "across all folders";
          
          return {
            content: [{ 
              type: "text", 
              text: `**Search Results ${scopeText} (${resultCount} documents found):**\n\n${JSON.stringify(results, null, 2)}` 
            }],
          };
          
        } catch (error) {
          return {
            content: [{ 
              type: "text", 
              text: `**Error searching knowledge bases:**\n\n${error instanceof Error ? error.message : String(error)}\n\n**Troubleshooting:**\n- Verify the AutoRAG instance is accessible\n- Check if the knowledge base has finished indexing\n- If using folder filtering, verify the folder path exists\n- Try a simpler query or adjust the score threshold` 
            }],
          };
        }
      }
    );
  }
}

// Export the default fetch handler for the worker
export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    
    if (url.pathname === "/sse" || url.pathname === "/sse/message") {
      return MyMCP.serveSSE("/sse").fetch(request, env, ctx);
    }
    
    if (url.pathname === "/mcp") {
      return MyMCP.serve("/mcp").fetch(request, env, ctx);
    }
    
    // Handle case where no path matches
    return new Response('Not found', { status: 404 });
  },
};
