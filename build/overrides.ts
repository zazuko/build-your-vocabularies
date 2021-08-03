import prefixes from '../src/prefixes'

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

export const overrides: Record<keyof typeof prefixes, Override> = {
  // Customize how each vocabulary is processed
}
