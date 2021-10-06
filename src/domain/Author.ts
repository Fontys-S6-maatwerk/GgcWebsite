export default class Author {
    id: number;
    name: string;
    slug: string;
    bio: string;

    constructor (id: number, name: string, slug: string, bio: string) {
      this.id = id
      this.name = name
      this.slug = slug
      this.bio = bio
    }
}
