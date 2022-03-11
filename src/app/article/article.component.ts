import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  votes: number;
  // title: string;
  // link: string;

  constructor() {
    // this.article = new Article(  // article is populated by the Input now, se we don't need
    //   'Angular',                 // anything here
    //   'http://angular.io',
    //   10);
  }

  // this.title = 'Angular';
  // this.link = 'http://angular.io';
  // this.votes = 10;


  voteUp(): boolean {
    this.article.voteUp();
    //this.votes += 1; // JS, by default, propagates the click event to all the parent components
    return false;    // 'cause the click event is propagated to parents, our brwsr is trying to follow the
    // empty link, which tells the browser to reload
  }

  voteDown(): boolean {
    this.article.voteDown();
    //this.votes -= 1;
    return false;  // return a boolean value of false (tells the browser not to propagate the event upwards)
  }

  ngOnInit(): void {
  }

}
