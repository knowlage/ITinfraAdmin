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
}
