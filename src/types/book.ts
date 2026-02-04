export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  // Mock fields
  rating?: number;
  reviewCount?: number;
}

export interface OpenLibrarySearchResponse {
  numFound: number;
  docs: Book[];
}
