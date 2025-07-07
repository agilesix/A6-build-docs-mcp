/**
 * Base types and interfaces for MCP tools
 */

import type { z } from "zod";
import type { ToolResponse, Environment } from "../../utils/types.js";

export interface ToolDefinition {
  name: string;
  description: string;
  schema: Record<string, z.ZodTypeAny>;
  handler: (params: any) => Promise<ToolResponse>;
}

export interface ToolContext {
  env: Environment;
}

export interface IBaseTool {
  readonly name: string;
  readonly description: string;
  getSchema(): Record<string, z.ZodTypeAny>;
  execute(params: any, context: ToolContext): Promise<ToolResponse>;
}

// Note: ToolRegistry uses the concrete BaseTool class, not the interface
// This is defined in the registry file to avoid circular imports
export type ToolRegistry = Map<string, any>; 