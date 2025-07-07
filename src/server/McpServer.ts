/**
 * MCP Server Configuration
 * Sets up the server and automatically registers all available tools
 */

import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Environment } from "../utils/types.js";
import { SERVER_CONFIG } from "../utils/constants.js";
import { createTools, registerToolsWithServer } from "../tools/index.js";
import type { ToolContext } from "../tools/base/types.js";

export class A6BuildDocsMcpServer extends McpAgent<Environment> {
  server = new McpServer({
    name: SERVER_CONFIG.NAME,
    version: SERVER_CONFIG.VERSION
  });

  async init() {
    // Create tool context
    const context: ToolContext = {
      env: this.env
    };

    // Create and register all tools
    const toolRegistry = createTools(context);
    registerToolsWithServer(this.server, toolRegistry, context);
  }
} 