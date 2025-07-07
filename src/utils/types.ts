/**
 * Shared types for A6 Build Docs AutoRAG MCP Server
 */

export interface SearchOptions {
  query: string;
  maxResults: number;
  scoreThreshold: number;
  autoragId: string;
}

export interface FolderFilterOptions extends SearchOptions {
  folderPath?: string;
}

export interface AutoragSearchOptions {
  query: string;
  rewrite_query: boolean;
  max_num_results: number;
  ranking_options: {
    score_threshold: number;
  };
  filters?: {
    type: "and";
    filters: Array<{
      type: "gte" | "lte" | "gt" | "lt" | "eq" | "ne";
      key: string;
      value: string;
    }>;
  };
}

export interface ToolResponse {
  content: Array<{
    type: "text";
    text: string;
  }>;
}

export interface Environment {
  AI: {
    autorag: (id: string) => {
      search: (options: AutoragSearchOptions) => Promise<any>;
    };
  };
  A6_BUILD_DOCS: R2Bucket;
  MCP_OBJECT: DurableObjectNamespace;
} 