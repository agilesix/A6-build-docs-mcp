/**
 * VA Staging Search Tool - Search specifically within VA-staging-review-launch-blocking-issues folder
 */

import { z } from "zod";
import { BaseTool } from "../base/BaseTool.js";
import type { ToolContext } from "../base/types.js";
import type { ToolResponse } from "../../utils/types.js";
import { DEFAULT_AUTORAG_ID, DEFAULT_MAX_RESULTS, DEFAULT_SCORE_THRESHOLD, FOLDER_PATHS, MAX_AUTORAG_RESULTS } from "../../utils/constants.js";

export class VAStagingSearchTool extends BaseTool {
  readonly name = "searchVAStaging";
  readonly description = "Search the VA staging review launch blocking issues documentation to understand deployment blockers, review processes, and staging environment requirements.";

  getSchema() {
    return {
      query: z.string().min(1).describe(
        "Your search query for VA staging review launch blocking issues documentation. Can be questions about deployment blockers, " +
        "staging review processes, launch requirements, environment setup, or any aspect of VA staging and launch procedures. " +
        "Examples: 'What are common launch blocking issues?', 'Staging review checklist', 'How to resolve deployment blockers?', 'VA launch requirements'"
      ),

      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(DEFAULT_MAX_RESULTS).describe(
        "Maximum number of document chunks to retrieve from the VA staging documentation. " +
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
      FOLDER_PATHS.VA_STAGING
    );

    const resultCount = this.getResultCount(results);
    return this.formatResults(results, resultCount, "within VA staging documentation");
  }
}
