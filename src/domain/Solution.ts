import Author from './Author'

export default class Solution {
  id: number;
  title: string;
  date: Date;
  author: Author;
  content?: string;
  sdgs: number[];
  introduction?: string;
  difficulty?: string;
  materials?: string[];
  tools?: string[]
  steps?: string[];
  likes: number;
  views: number;

  constructor(id: number, title: string, date: Date, author: Author, content: string, sdgs: number[], likes: number, views: number, introduction?: string, difficulty?: string, steps?: string[], materials?: string[], tools?: string[]) {
    this.id = id
    this.title = title
    this.date = date
    this.author = author
    this.content = content
    this.introduction = introduction
    this.difficulty = difficulty
    this.materials = materials
    this.tools = tools
    this.steps = steps
    this.sdgs = sdgs
    this.likes = likes
    this.views = views
  }
}
