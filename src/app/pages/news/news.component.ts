import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsLists = [

  ]

  id = ''
  page:number = 1
  viewsNews:any = ''

  constructor(private newsService:NewsService, private router:Router) { }  

  ngOnInit() {
    this.getNews()
  }

  getNews(){
    this.newsService.getNews().subscribe(rs => {      
      this.newsLists = rs['data']
    })
  }

  onActivate(id){        
    this.newsService.putActivateNews(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }      
    })
  }

  onDeactivate(id){      
    this.newsService.putDeactivateNews(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }      
    })
  }

  onPinActivate(id){    
    this.newsService.putPinActivateNews(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }    
    })
  }

  onPinDeactivate(id){    
    this.newsService.putPinDeactivateNews(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }    
    })
  }
  
  onDelete(id){
    this.newsService.deleteNews(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }    
    })
  }

  onDeleteConfirm(id){
    this.id = id
  }

  onEdite(news){    
    localStorage.setItem('newsEdit',JSON.stringify(news))
    this.router.navigate(['/dashboard/news/edit'])
  }

  onCreate(){
    localStorage.removeItem('newsEdit')
    this.router.navigate(['/dashboard/news/edit'])
  }
  
  onView(news){
    this.viewsNews = news
    console.log(news)    
  }

}
