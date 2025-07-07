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
          { type: "gt", key: "folder", value: `${folderPath}/` },
          { type: "lte", key: "folder", value: `${folderPath}/z` }
        ]
      };
    }

    return await this.env.AI.autorag(autoragId).search(searchOptions);
  }

  async init() {
    // Primary tool for searching A6 Build Docs (updated from VA Design System)
    this.server.tool(
      "searchDesignSystem",
      { 
        query: z.string().min(1).describe(
          "Your search query. Can be questions about A6 Build Docs content, documentation, guides, or any content in the knowledge base. " +
          "Examples: 'How do I implement feature X?', 'What are the deployment requirements?', 'Project documentation for Y'"
        ),
        
        autoragId: z.string().min(1).default("a6-build-docs-rag").describe(
          "AutoRAG instance identifier to search. Use 'a6-build-docs-rag' for A6 Build Docs. " +
          "This determines which knowledge base gets searched."
        ),
        
        maxResults: z.number().min(1).max(50).default(10).describe(
          "Maximum number of document chunks to retrieve from the knowledge base. " +
          "More results = broader coverage but potentially less focused. " +
          "Recommended: 5-15 for specific questions, 20-50 for comprehensive research."
        ),
        
        scoreThreshold: z.number().min(0).max(1).default(0.3).describe(
          "Minimum similarity score (0.0 to 1.0) for including results. Controls result quality vs quantity:\n" +
          "• 0.7-1.0: High precision, only very relevant matches (may miss some relevant content)\n" +
          "• 0.5-0.7: Balanced precision and recall (recommended for most searches)\n" +
          "• 0.3-0.5: High recall, includes loosely related content (good for exploratory searches)\n" +
          "• 0.0-0.3: Returns almost everything (use for very broad searches)"
        )
      },
      async ({ query, autoragId, maxResults, scoreThreshold }) => {
        try {
          const results = await this.searchWithFolderFilter({
            query,
            maxResults,
            scoreThreshold,
            autoragId
          });
          
          const resultCount = Array.isArray(results) ? results.length : 'Unknown number of';
          return {
            content: [{ 
              type: "text", 
              text: `**Search Results (${resultCount} documents found):**\n\n${JSON.stringify(results, null, 2)}` 
            }],
          };
          
        } catch (error) {
          return {
            content: [{ 
              type: "text", 
              text: `**Error searching "${autoragId}":**\n\n${error instanceof Error ? error.message : String(error)}\n\n**Troubleshooting:**\n- Verify the AutoRAG instance "${autoragId}" exists and is accessible\n- Check if the knowledge base has finished indexing\n- Try a simpler query or adjust the score threshold\n- Ensure you have proper permissions to access this AutoRAG instance` 
            }],
          };
        }
      }
    );

    // New tool: Search specifically within Greenhouse folder
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

    // New tool: Search across all knowledge bases with optional folder filtering
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
