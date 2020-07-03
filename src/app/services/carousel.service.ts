import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http:HttpClient) { }

  getCarousel(){
    return this.http.get('http://localhost:8000/carousels/getCarouselsAll')
  }

  putPinActivate(id){
    return this.http.put('http://localhost:8000/carousels/putCarouselPinActivate/'+id,[])
  }

  putPinDeactivate(id){
    return this.http.put('http://localhost:8000/carousels/putCarouselPinDeactivate/'+id,[])
  }

  putActivate(id){
    return this.http.put('http://localhost:8000/carousels/putCarouselActivate/'+id,[])
  }

  putDeactivate(id){
    return this.http.put('http://localhost:8000/carousels/putCarouselDeactivate/'+id,[])
  }

  insertCarousel(carousel){
    let headers = { 'Content-Type':'application/json' }
    if(carousel.id == ''){
      return this.http.post('http://localhost:8000/carousels/postCarouselInsert',carousel,{headers})
    }else{
      return this.http.put('http://localhost:8000/carousels/putCarouselInsert',carousel,{headers})
    }
    
  }

  deleteCarousel(id){
    return this.http.delete('http://localhost:8000/carousels/deleteCarousel/'+id)
  }
}
