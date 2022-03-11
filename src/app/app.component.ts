import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }
  // title = 'angular-reddit';
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0)); // create a new Article instance with the submitted title 
    title.value = '';   //and URL, and add it the array of Articles
    link.value = '';   // clear the input fields
    return false;

    // title and link are both objects of type HTMLInputElement and note the input values directly!
    // to get the value from the input we have to call title.value, and now just console logging them
    // backtick is a handy feature of ES6: backtick strings will expand template variables  
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
