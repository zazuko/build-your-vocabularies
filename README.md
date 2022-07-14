# @zazuko/build-your-vocabularies

Roll your own vocabularies package which will export your ontologies/vocabularies as n-quads and code modules.

## Preparation

Having created a repository from this template, follow the instructions below to create a package with your vocabularies.

1. Adjust `package.json`, at the least by:
   * changing the name
   * changing the `bin` name
   * changing the `indexBase` in `fetch` script
   * possibly remove `private: true`
2. Prepare your vocabularies:
   * add their prefix/namespace pairs in [src/prefixes.ts](src/prefixes.ts)
   * if necessary, set up their fetch routine in [`build/overrides.ts`](build/overrides.ts)
   * see [here](https://github.com/zazuko/rdf-vocabularies/blob/master/overrides.ts) for examples of various overrides
   * local vocabularies can be added as RDF sources in a local directory, such as `src/vocabulary`, and then linked to `file:` URIs in the overrides file. See the [example]([/example/build/overrides.ts#L17](https://github.com/zazuko/build-your-vocabularies/blob/example/build/overrides.ts#L17))
3. `npm run fetch`
   * optionally call as `npm run fetch -- <prefix>` to fetch+process only one
4. Customise this readme
4. Commit the result
5. Bump version and publish your package
   * Might consider setting CI automation

Check the `example` branch for inspiration

## Updates

Any time the vocabularies change, run `yarn fetch` to update them. You can also run `yarn fetch prefix` to update only one vocabulary.

## Usage

The final product will be an extension to the `@zazuko/rdf-vocabularies`, albeit with side effects. Simply import in your project the to have you prefixes added to the default selection.

```javascript
// replace with your package name
import '@zazuko/build-your-vocabularies'
```

Additionally, modules exporting `@rdfjs/namespace` builders will be generated.

```javascript
// default builders prevent constructing terms which are not defined in vocabulary
import { prefixA } from '@zazuko/build-your-vocabularies/builders'

// use loose builders for a free-for-all, allowing custom terms
import { prefixB } from '@zazuko/build-your-vocabularies/builders/loose'
```

Check [`@zazuko/rdf-vocabularies` readme](https://github.com/zazuko/rdf-vocabularies#usage) for detailed usage instructions.
