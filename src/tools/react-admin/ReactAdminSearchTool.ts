/**
 * React-Admin Search Tool - Search specifically within React-Admin documentation folder
 */

import { z } from "zod";
import { BaseTool } from "../base/BaseTool.js";
import type { ToolContext } from "../base/types.js";
import type { ToolResponse } from "../../utils/types.js";
import { DEFAULT_AUTORAG_ID, DEFAULT_MAX_RESULTS, DEFAULT_SCORE_THRESHOLD, FOLDER_PATHS, MAX_AUTORAG_RESULTS } from "../../utils/constants.js";

export class ReactAdminSearchTool extends BaseTool {
  readonly name = "searchReactAdmin";
  readonly description = "Search the React-Admin framework documentation to understand components, hooks, authentication, data providers, and building admin panels with React.";

  getSchema() {
    return {
      query: z.string().min(1).describe(
        "Your search query for React-Admin documentation. Can be questions about components, hooks, " +
        "data providers, authentication, forms, datagrids, routing, theming, or any aspect of building admin interfaces with React-Admin. " +
        "Examples: 'How to create a custom data provider?', 'List component props', 'Authentication setup', 'How to customize the theme?', 'Form validation with React-Admin'"
      ),
      
      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(DEFAULT_MAX_RESULTS).describe(
        "Maximum number of document chunks to retrieve from the React-Admin documentation. " +
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
      FOLDER_PATHS.REACT_ADMIN
    );
    
    const resultCount = this.getResultCount(results);
    return this.formatResults(results, resultCount, "within React-Admin documentation");
  }
}