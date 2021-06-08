const prefixes = {
  // Add with your prefixes here
  ex: 'https://example.com/vocab#'
}

type LocalPrefixes = typeof prefixes

declare module '@zazuko/rdf-vocabularies/prefixes' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

export default prefixes
