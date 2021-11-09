import Author from './Author'

export default class Solution {
  id: number;
  title: string;
  date: Date;
  author: Author;
  content: string;
  sdgs: number[];
  likes: number;
  views: number;

  constructor (id: number, title: string, date: Date, author: Author, content: string, sdgs: number[], likes: number, views: number) {
    this.id = id
    this.title = title
    this.date = date
    this.author = author
    this.content = content
    this.sdgs = sdgs
    this.likes = likes
    this.views = views
  }
}
