export default class Author {
  label: string;
  path: string | null;

  constructor (label: string, path: string | null) {
    this.label = label
    this.path = path
  }
}
