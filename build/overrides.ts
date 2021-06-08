interface FileSpec {
  file?: string;
  mediaType?: string;
  xmlParserOptions?: {
    baseIRI: string;
  };
}

export interface Override extends FileSpec {
  skip?: boolean;
  files?: FileSpec[];
}

export const overrides: Record<string, Override> = {
  // Customize how each vocabulary is processed
  ex: {
    file: 'file:src/vocabulary/ex.ttl'
  }
}
