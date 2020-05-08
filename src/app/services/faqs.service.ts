import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http:HttpClient) { }

  getFaqsAll(){
    return this.http.get('http://localhost:8000/faqs/getFaqsAll')
  }

  putDeactivateFaqs(id){
    return this.http.put('http://localhost:8000/faqs/putDeactivateFaqs/'+id,[])
  }

  putActivateFaqs(id){
    return this.http.put('http://localhost:8000/faqs/putActivateFaqs/'+id,[])
  }

  deleteFaqs(id){
    return this.http.delete('http://localhost:8000/faqs/deleteFaqs/'+id)
  }

  insertFaqs(faqs){
    let headers = { 'Content-Type':'application/json' } 
    if(faqs.id == ''){
      return this.http.post('http://localhost:8000/faqs/postInsert',faqs,{headers})
    }else{
      return this.http.put('http://localhost:8000/faqs/putInsert',faqs,{headers})
    }
  }
}
