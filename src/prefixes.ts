const prefixes = {
  // Do not remove these prefixes. They are necessary for building the package
  dbo: 'http://dbpedia.org/ontology/',
  dc11: 'http://purl.org/dc/elements/1.1/',
  dcterms: 'http://purl.org/dc/terms/',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  rdfa: 'http://www.w3.org/ns/rdfa#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',

  // Add your prefixes here
  ex: 'https://example.com/vocab#'
}

type KnownPrefixes = {
  readonly [key in keyof typeof prefixes]: string
}
interface CustomPrefixes {
  [key: string]: string;
}

export default prefixes as KnownPrefixes & CustomPrefixes
