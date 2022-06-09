import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'Bootstrap 4.6',
      url: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/'
    },
    {
      title: 'Binding syntax',
      url: 'https://angular.io/guide/binding-syntax'
    },
    {
      title: 'Sử dụng Pipes trong Angular',
      url: 'https://levunguyen.com/laptrinhweb/2021/06/20/su-dung-pipes-trong-angular/'
    },
    {
      title: 'Checklist casestudy C1221G1 Module 5',
      url: 'https://docs.google.com/spreadsheets/d/1xa76TfaJmdSBdfjz9KdlGRbFkqA4Mj4z0aFo7lr1dpQ/edit#gid=988595569'
    },
    {
      title: '[C1221G1]_Comment_James_Exercises_Module_5',
      url: 'https://docs.google.com/spreadsheets/d/1hBSRQW0nG20LI7N-mngyoxJLOwaVNgDP/edit#gid=1476362570'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
