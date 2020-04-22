import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

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

  constructor(private newsService:NewsService) { }  

  ngOnInit() {
    this.getNews()
  }

  getNews(){
    this.newsService.getNews().subscribe(rs => {
      // console.log(rs['data'])
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

}
