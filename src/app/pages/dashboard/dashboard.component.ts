import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  computerActiveTotal:any = 0
  computerSummary:any

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.getComputersSummary()
  }

  getComputersSummary(){
    this.dashboardService.getComputersSummary().subscribe(rs => {
      if(rs['code'] == 1){
        this.computerSummary = rs['data']
      }
      rs['data'].forEach(element => {
        this.computerActiveTotal += element.total
      });
    })
  }

}
