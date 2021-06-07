const prefixes = {
  // Replace with your prefixes here
  ex: 'https://example.com/vocab#'
}

type KnownPrefixes = {
  readonly [key in keyof typeof prefixes]: string
}
interface CustomPrefixes {
  [key: string]: string;
}

export default prefixes as KnownPrefixes & CustomPrefixes
