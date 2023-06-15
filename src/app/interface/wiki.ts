export interface SearchResponse {
    batchcomplete: string;
    continue: {
      sroffset: number;
      continue: string;
    };
    query: {
      searchinfo: {
        totalhits: number;
      };
      search: SearchResult[];
    };
  }
  
 export interface SearchResult {
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: string;
  }
  