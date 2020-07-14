import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  constructor(private http:HttpClient) { }

  
  getSoftwareBalance(){
    return this.http.get('http://localhost:8000/software/getSoftwareBalance')
  }

  getSoftwareByEmployeenumber(employeenumber){
    return this.http.get('http://localhost:8000/software/getSoftwareByEmployeenumber/'+employeenumber)
  }
}
