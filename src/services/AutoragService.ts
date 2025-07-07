/**
 * AutoRAG Service - Handles all interactions with Cloudflare AutoRAG
 */

import type { AutoragSearchOptions, Environment, FolderFilterOptions, SearchOptions } from "../utils/types.js";
import { createFolderFilter } from "./FilterService.js";

export class AutoragService {
  constructor(private env: Environment) {}

  /**
   * Search AutoRAG with optional folder filtering
   */
  async search(options: FolderFilterOptions): Promise<any> {
    const searchOptions: AutoragSearchOptions = {
      query: options.query,
      rewrite_query: true,
      max_num_results: options.maxResults,
      ranking_options: {
        score_threshold: options.scoreThreshold
      }
    };

    // Add folder filtering if specified
    if (options.folderPath) {
      searchOptions.filters = createFolderFilter(options.folderPath);
    }

    return await this.env.AI.autorag(options.autoragId).search(searchOptions);
  }

  /**
   * Search without folder filtering
   */
  async searchAll(options: SearchOptions): Promise<any> {
    return this.search({ ...options, folderPath: undefined });
  }

  /**
   * Search within a specific folder
   */
  async searchInFolder(options: SearchOptions, folderPath: string): Promise<any> {
    return this.search({ ...options, folderPath });
  }
} 