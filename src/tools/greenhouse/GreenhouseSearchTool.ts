/**
 * Greenhouse Search Tool - Search specifically within Greenhouse folder
 */

import { z } from "zod";
import { BaseTool } from "../base/BaseTool.js";
import type { ToolContext } from "../base/types.js";
import type { ToolResponse } from "../../utils/types.js";
import { DEFAULT_AUTORAG_ID, DEFAULT_MAX_RESULTS, DEFAULT_SCORE_THRESHOLD, FOLDER_PATHS, MAX_AUTORAG_RESULTS } from "../../utils/constants.js";

export class GreenhouseSearchTool extends BaseTool {
  readonly name = "searchGreenhouse";
  readonly description = "Search the Greenhouse Harvest API documentation to understand API endpoints, objects, authentication, and usage patterns.";

  getSchema() {
    return {
      query: z.string().min(1).describe(
        "Your search query for Greenhouse Harvest API documentation. Can be questions about API endpoints, " +
        "objects, authentication methods, or any aspect of the Greenhouse Harvest API. " +
        "Examples: 'How do I authenticate with the Harvest API?', 'List candidates endpoint', 'Application object structure', 'How to create a job?'"
      ),
      
      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(DEFAULT_MAX_RESULTS).describe(
        "Maximum number of document chunks to retrieve from the Greenhouse API documentation. " +
        "Recommended: 5-15 for specific questions, up to 20 for comprehensive research. Maximum allowed: 20."
      ),
      
      scoreThreshold: z.number().min(0).max(1).default(DEFAULT_SCORE_THRESHOLD).describe(
        "Minimum similarity score (0.0 to 1.0) for including results. " +
        "Higher values = more precise results, lower values = broader results."
      )
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
      FOLDER_PATHS.GREENHOUSE
    );
    
    const resultCount = this.getResultCount(results);
    return this.formatResults(results, resultCount, "within Greenhouse folder");
  }
} 