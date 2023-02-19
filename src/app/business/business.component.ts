import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BuisnessNewsComponent {
  __newsService:NewsOperationsService; // creating object of Service layer
  router:Router;


  allNews : Array<News> = [];




  constructor(newsService:NewsOperationsService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('BusinessNews');
    this.router = router;
    console.log(this.allNews.length);
  }
  viewNewsDetails(category:string)
  {

    this.router.navigate(['newsDetail',category]);
  }

}


