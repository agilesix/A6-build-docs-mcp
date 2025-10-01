/**
 * Constants for A6 Build Docs AutoRAG MCP Server
 */

export const DEFAULT_AUTORAG_ID = "a6-build-docs-rag";
export const DEFAULT_MAX_RESULTS = 10;
export const DEFAULT_SCORE_THRESHOLD = 0.3;
export const DEFAULT_UNIVERSAL_MAX_RESULTS = 15;
export const MAX_AUTORAG_RESULTS = 20;

export const FOLDER_PATHS = {
  GREENHOUSE: "Greenhouse",
  REACT_ADMIN: "react-admin-docs",
  VA_STAGING: "VA-staging-review-launch-blocking-issues",
} as const;

export const SERVER_CONFIG = {
  NAME: "A6 Build Docs AutoRAG MCP Server",
  VERSION: "1.0.0",
} as const;

export const ERROR_MESSAGES = {
  AUTORAG_ERROR: "Error searching AutoRAG instance",
  FOLDER_NOT_FOUND: "Verify the folder exists in the knowledge base",
  INDEXING_INCOMPLETE: "Check if the knowledge base has finished indexing",
  INVALID_QUERY: "Try a simpler query or adjust the score threshold",
  PERMISSIONS_ERROR: "Ensure you have proper permissions to access this AutoRAG instance",
} as const; 