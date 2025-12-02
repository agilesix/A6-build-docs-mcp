/**
 * Tango Search Tool - Search specifically within Tango API documentation folder
 */

import { z } from "zod";
import { BaseTool } from "../base/BaseTool.js";
import type { ToolContext } from "../base/types.js";
import type { ToolResponse } from "../../utils/types.js";
import { DEFAULT_AUTORAG_ID, DEFAULT_MAX_RESULTS, DEFAULT_SCORE_THRESHOLD, FOLDER_PATHS, MAX_AUTORAG_RESULTS } from "../../utils/constants.js";

export class TangoSearchTool extends BaseTool {
  readonly name = "searchTango";
  readonly description = "Search the Tango API documentation for federal government contracting data. Tango provides access to contract awards, opportunities, vendors, and federal procurement data.";

  getSchema() {
    return {
      query: z.string().min(1).describe(
        "Your search query for Tango API documentation. Can be questions about API endpoints, " +
        "authentication, contracts, opportunities, vendors, federal procurement data, or any aspect of the Tango API. " +
        "Examples: 'How to search contracts?', 'Vendor lookup endpoint', 'Authentication methods', 'Opportunity filters', 'Contract award data'"
      ),

      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(DEFAULT_MAX_RESULTS).describe(
        "Maximum number of document chunks to retrieve from the Tango API documentation. " +
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
      FOLDER_PATHS.TANGO
    );

    const resultCount = this.getResultCount(results);
    return this.formatResults(results, resultCount, "within Tango API documentation");
  }
}
