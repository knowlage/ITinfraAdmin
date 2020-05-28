import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http:HttpClient) { }

  getDownloadAll(){
    return this.http.get('http://localhost:8000/download/getDownloadAll')
  }

  deleteDownload(id){
    return this.http.delete('http://localhost:8000/download/deleteDownload/'+id)
  }

  pinActivateDownload(id){
    return this.http.put('http://localhost:8000/download/pinActivateDownload/'+id,[])
  }

  pinDeactivateDownload(id){
    return this.http.put('http://localhost:8000/download/pinDeactivateDownload/'+id,[])
  }

  activateDownload(id){
    return this.http.put('http://localhost:8000/download/activateDownload/'+id,[])
  }

  deactivateDownload(id){
    return this.http.put('http://localhost:8000/download/deactivateDownload/'+id,[])
  }

  postInsertDownload(download){
    let headers = {'Content-Type':'application/json'}    
    if(download.id == ''){
      return this.http.post('http://localhost:8000/download/postInsertDownload',download,{headers})
    }else{
      return this.http.put('http://localhost:8000/download/putInsertDownload',download,{headers})
    }
    
    
    
  }
}
