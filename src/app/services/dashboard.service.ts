import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getComputersSummary(){
    return this.http.get('http://localhost:8000/dashboard/getComputers')
  }

  getComputerInstock(){
    return this.http.get('http://localhost:8000/dashboard/getComputerInstock')
  }

  getComputerBorrow(){
    return this.http.get('http://localhost:8000/dashboard/getComputerBorrow')
  }

  getSoftwaresSummary(){
    return this.http.get('http://localhost:8000/dashboard/getSoftwares')
  }

  getSoftwareBalance(){
    return this.http.get('http://localhost:8000/dashboard/getSoftwareBalance')
  }
}
