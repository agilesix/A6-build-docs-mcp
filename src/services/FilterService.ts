/**
 * Filter Service - Handles folder filtering logic for AutoRAG searches
 */

/**
 * Create folder filter using "starts with" pattern for hierarchical filtering
 * Uses gte (greater than or equal) to include exact folder matches
 */
export function createFolderFilter(folderPath: string) {
  return {
    type: "and" as const,
    filters: [
      { type: "gte" as const, key: "folder", value: `${folderPath}/` },
      { type: "lte" as const, key: "folder", value: `${folderPath}/z` }
    ]
  };
}

/**
 * Create multiple folder filters (for future use)
 */
export function createMultipleFolderFilter(folderPaths: string[]) {
  return {
    type: "or" as const,
    filters: folderPaths.map(folderPath => ({
      type: "and" as const,
      filters: [
        { type: "gte" as const, key: "folder", value: `${folderPath}/` },
        { type: "lte" as const, key: "folder", value: `${folderPath}/z` }
      ]
    }))
  };
} 