/**
 * Tool Registry - Central place to register all MCP tools
 * 
 * To add a new tool:
 * 1. Import your tool class
 * 2. Add it to the createTools() function
 * 3. That's it! The tool will be automatically registered with the MCP server
 */

import type { BaseTool } from "./base/BaseTool.js";
import { type ToolContext, ToolRegistry } from "./base/types.js";
import { GreenhouseSearchTool } from "./greenhouse/GreenhouseSearchTool.js";
import { ReactAdminSearchTool } from "./react-admin/ReactAdminSearchTool.js";
import { UniversalSearchTool } from "./universal/UniversalSearchTool.js";

// Define the correct type for the registry locally
type ConcreteToolRegistry = Map<string, BaseTool>;

/**
 * Creates and returns all available tools
 * This is where you register new tools - just add them to the array!
 */
export function createTools(context: ToolContext): ConcreteToolRegistry {
  const tools = new Map<string, BaseTool>();
  
  // Register all available tools here
  const toolClasses = [
    GreenhouseSearchTool,
    ReactAdminSearchTool,
    UniversalSearchTool,
    // Add new tools here! Just import them above and add the class to this array
  ];
  
  // Instantiate and register each tool
  for (const ToolClass of toolClasses) {
    const tool = new ToolClass(context);
    tools.set(tool.name, tool);
  }
  
  return tools;
}

/**
 * Get a specific tool by name
 */
export function getTool(registry: ConcreteToolRegistry, name: string): BaseTool | undefined {
  return registry.get(name);
}

/**
 * Get all tool names
 */
export function getToolNames(registry: ConcreteToolRegistry): string[] {
  return Array.from(registry.keys());
}

/**
 * Register all tools with an MCP server
 */
export function registerToolsWithServer(server: any, registry: ConcreteToolRegistry, context: ToolContext): void {
  for (const [name, tool] of registry) {
    server.tool(
      name,
      tool.getSchema(),
      async (params: any) => tool.safeExecute(params, context)
    );
  }
} 