/**
 * Universal Search Tool - Search across all knowledge bases with optional folder filtering
 */

import { z } from "zod";
import { BaseTool } from "../base/BaseTool.js";
import type { ToolContext } from "../base/types.js";
import type { ToolResponse } from "../../utils/types.js";
import { DEFAULT_AUTORAG_ID, DEFAULT_UNIVERSAL_MAX_RESULTS, DEFAULT_SCORE_THRESHOLD, MAX_AUTORAG_RESULTS } from "../../utils/constants.js";

export class UniversalSearchTool extends BaseTool {
  readonly name = "searchAllKnowledgeBases";
  readonly description = "Generic search across all knowledge bases with optional folder filtering. Most flexible tool for comprehensive searches.";

  getSchema() {
    return {
      query: z.string().min(1).describe(
        "Your search query across all knowledge bases. Can be questions about any content " +
        "in the A6 Build Docs system. Examples: 'How do I deploy applications?', 'Security guidelines', 'API documentation'"
      ),
      
      folderPath: z.string().optional().describe(
        "Optional folder path to filter results. If specified, only documents within this folder " +
        "will be searched. Examples: 'Greenhouse', 'Security', 'API'. Leave empty to search all folders."
      ),
      
      maxResults: z.number().min(1).max(MAX_AUTORAG_RESULTS).default(DEFAULT_UNIVERSAL_MAX_RESULTS).describe(
        "Maximum number of document chunks to retrieve across all knowledge bases. " +
        "Recommended: 10-20 for broad searches, up to 20 for comprehensive research. Maximum allowed: 20."
      ),
      
      scoreThreshold: z.number().min(0).max(1).default(DEFAULT_SCORE_THRESHOLD).describe(
        "Minimum similarity score (0.0 to 1.0) for including results. " +
        "Lower values cast a wider net, higher values return more precise matches."
      )
    };
  }

  async execute(params: any, context: ToolContext): Promise<ToolResponse> {
    const { query, folderPath, maxResults, scoreThreshold } = params;
    
    const results = await this.autoragService.search({
      query,
      folderPath,
      maxResults,
      scoreThreshold,
      autoragId: DEFAULT_AUTORAG_ID
    });
    
    const resultCount = this.getResultCount(results);
    const scopeText = folderPath ? `within ${folderPath} folder` : "across all folders";
    
    return this.formatResults(results, resultCount, scopeText);
  }
} 