import { prefixes } from '@zazuko/rdf-vocabularies'
import morePrefixes from './prefixes'

export { vocabularies, loadFile } from './vocabularies'

Object.entries(morePrefixes)
  .forEach(([prefix, namespace]) => {
    prefixes[prefix] = namespace
  })
