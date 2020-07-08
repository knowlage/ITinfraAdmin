import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(private http:HttpClient) { }

  getComputersSummary(){
    return this.http.get('http://localhost:8000/computer/getComputers')
  }

  getComputerInstock(){
    return this.http.get('http://localhost:8000/computer/getComputerInstock')
  }

  getComputerBorrow(){
    return this.http.get('http://localhost:8000/computer/getComputerBorrow')
  }
}
