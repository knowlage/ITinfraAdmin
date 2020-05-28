import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  getFiles(){
    return this.http.get('http://localhost:8000/uploads/getUploads')
  }

  getUploadFile(){
    return this.http.get('http://localhost:8000/uploads/uploadFile')
  }

  postUpload(formData){
    return this.http.post('http://localhost:8000/uploads/uploadFile', formData)
  }

  deleteUploadFile(file){
    return this.http.delete('http://localhost:8000/uploads/deleteUploadFile/'+file)
  }

  getDownload(filename){    
    this.http.get('http://localhost:8000/download/'+filename)
  }

}
