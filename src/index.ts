/**
 * A6 Build Docs AutoRAG MCP Server
 * 
 * This MCP server provides access to AutoRAG knowledge bases through
 * Cloudflare's AutoRAG service. It supports folder-based organization
 * for accessing multiple knowledge bases within the A6 Build Docs system.
 * 
 * Architecture:
 * - Clean separation of concerns with services, tools, and utilities
 * - Easy tool registration - just add new tools to src/tools/index.ts
 * - SOLID principles applied throughout
 */

import { A6BuildDocsMcpServer } from "./server/McpServer.js";

export const MyMCP = A6BuildDocsMcpServer;

// Export the default fetch handler for the worker
export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    
    if (url.pathname === "/sse" || url.pathname === "/sse/message") {
      return A6BuildDocsMcpServer.serveSSE("/sse").fetch(request, env, ctx);
    }
    
    if (url.pathname === "/mcp") {
      return A6BuildDocsMcpServer.serve("/mcp").fetch(request, env, ctx);
    }
    
    // Handle case where no path matches
    return new Response('Not found', { status: 404 });
  },
};
