import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  constructor(private http:HttpClient) { }

  
  getSoftwaresSummary(){
    return this.http.get('http://localhost:8000/software/getSoftwares')
  }

  getSoftwareBalance(){
    return this.http.get('http://localhost:8000/software/getSoftwareBalance')
  }
}
