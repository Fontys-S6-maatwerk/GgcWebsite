import Author from './Author'

export default class Solution {
    title: string;
    date: Date;
    author: Author;
    content: string;
    sdgs: number[];
    likes: number;
    views: number;

    constructor (title: string, date: Date, author: Author, content: string, sdgs: number[], likes: number, views: number) {
      this.title = title
      this.date = date
      this.author = author
      this.content = content
      this.sdgs = sdgs
      this.likes = likes
      this.views = views
    }
}
