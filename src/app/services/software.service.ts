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

  getSoftwares(){
    return this.http.get('http://localhost:8000/software/getSoftwaresList')
  }

  deactivateSoftware(id){
    return this.http.put('http://localhost:8000/software/pinDeactivateSoftware/'+id,[])
  }

  activateSoftware(id){
    return this.http.put('http://localhost:8000/software/pinActivateSoftware/'+id,[])
  }

  deleteSoftware(id){
    return this.http.delete('http://localhost:8000/software/deleteSoftware/'+id)
  }
}
