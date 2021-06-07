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
  ex: {
    file: 'file:src/vocabulary/ex.ttl'
  },
  // do not process the standard vocabularies
  // import them from `@zazuko/rdf-vocabularies`
  dbo: { skip: true },
  dc11: { skip: true },
  dcterms: { skip: true },
  rdf: { skip: true },
  rdfa: { skip: true },
  rdfs: { skip: true }
}
