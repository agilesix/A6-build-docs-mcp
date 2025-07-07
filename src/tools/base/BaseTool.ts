/**
 * Abstract base class for all MCP tools
 * Provides common functionality and enforces consistent interface
 */

import type { z } from "zod";
import type { IBaseTool, ToolContext } from "./types.js";
import type { ToolResponse } from "../../utils/types.js";
import { AutoragService } from "../../services/AutoragService.js";
import { ERROR_MESSAGES } from "../../utils/constants.js";

export abstract class BaseTool implements IBaseTool {
  abstract readonly name: string;
  abstract readonly description: string;

  protected autoragService: AutoragService;

  constructor(context: ToolContext) {
    this.autoragService = new AutoragService(context.env);
  }

  abstract getSchema(): Record<string, z.ZodTypeAny>;
  abstract execute(params: any, context: ToolContext): Promise<ToolResponse>;

  /**
   * Format search results into a consistent response
   */
  protected formatResults(results: any, resultCount: string | number, scope?: string): ToolResponse {
    const scopeText = scope ? ` ${scope}` : "";
    return {
      content: [{
        type: "text",
        text: `**Search Results${scopeText} (${resultCount} documents found):**\n\n${JSON.stringify(results, null, 2)}`
      }]
    };
  }

  /**
   * Format error response with troubleshooting guidance
   */
  protected formatError(error: Error | string, context?: string): ToolResponse {
    const errorMessage = error instanceof Error ? error.message : error;
    const contextText = context ? ` ${context}` : "";
    
    return {
      content: [{
        type: "text",
        text: `**Error searching${contextText}:**\n\n${errorMessage}\n\n**Troubleshooting:**\n- ${ERROR_MESSAGES.FOLDER_NOT_FOUND}\n- ${ERROR_MESSAGES.INDEXING_INCOMPLETE}\n- ${ERROR_MESSAGES.INVALID_QUERY}`
      }]
    };
  }

  /**
   * Get result count in a safe way
   */
  protected getResultCount(results: any): string | number {
    return Array.isArray(results) ? results.length : 'Unknown number of';
  }

  /**
   * Execute with error handling
   */
  async safeExecute(params: any, context: ToolContext): Promise<ToolResponse> {
    try {
      return await this.execute(params, context);
    } catch (error) {
      return this.formatError(error as Error, this.name);
    }
  }
} 