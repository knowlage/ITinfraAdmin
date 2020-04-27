import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get('http://localhost:8000/news/getnewsall')
  }

  putActivateNews(id){
    return this.http.put('http://localhost:8000/news/putActivateNews/'+id,[])
  }

  putDeactivateNews(id){
    return this.http.put('http://localhost:8000/news/putDeactivateNews/'+id,[])
  }

  putPinActivateNews(id){
    return this.http.put('http://localhost:8000/news/putPinActivateNews/'+id,[])
  }

  putPinDeactivateNews(id){
    return this.http.put('http://localhost:8000/news/putPinDeactivateNews/'+id,[])
  }

  deleteNews(id){
    return this.http.delete('http://localhost:8000/news/deleteNews/'+id)
  }

  insertNews(news){
    let headers = { 'Content-Type':'application/json' } 
    if(news.id == ''){
      return this.http.post('http://localhost:8000/news/postInsert',news,{headers})
    }else{
      return this.http.put('http://localhost:8000/news/putInsert', news,{headers})
    }    
      
    
  }
}
