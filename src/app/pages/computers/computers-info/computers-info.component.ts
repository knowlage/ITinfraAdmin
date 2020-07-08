import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../../../services/computer.service';

@Component({
  selector: 'app-computers-info',
  templateUrl: './computers-info.component.html',
  styleUrls: ['./computers-info.component.scss']
})
export class ComputersInfoComponent implements OnInit {

  computerChartTotal:any = 0
  computerChartLabels = []
  computerChartType = 'pie'
  computerChartData = []
  computerChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(192,192,192,0.3)', 'rgba(255,255,0,0.3)'],
    },
  ]
  computerChartTitle = ''

  computerActiveTotal:any = 0
  computerActiveChartLabels = [] 
  computerActiveChartData = []
  

  computerInstockTotal:any = 0
  computerInstockChartLabels = []
  computerInstockChartData = []

  computerBorrowTotal:any = 0
  computerBorrowChartLabels = []
  computerBorrowChartData = []

  constructor(private computerService:ComputerService) { }

  ngOnInit() {
    this.getComputersSummary()
    this.getComputerInstock()
    this.getComputerBorrow()
    this.computerActive()    
  }

  getComputersSummary(){
    this.computerService.getComputersSummary().subscribe(rs => {
      if(rs['code'] == 1){       
        rs['data'].forEach(element => {
          this.computerActiveChartLabels.push(element.type) 
          this.computerActiveChartData.push(parseInt(element.total))  
          this.computerActiveTotal += element.total
        });
      }
    })
  }

  getComputerInstock(){
    this.computerService.getComputerInstock().subscribe(rs => {
      if(rs['code'] == 1){       
        rs['data'].forEach(element => {
          this.computerInstockTotal += element.total
          this.computerInstockChartLabels.push(element.type)
          this.computerInstockChartData.push(parseInt(element.total))
        })
      }
    })
  }

  getComputerBorrow(){
    this.computerService.getComputerBorrow().subscribe(rs => {
      if(rs['code'] == 1){
        rs['data'].forEach(element => {
          this.computerBorrowTotal += element.total
          this.computerBorrowChartLabels.push(element.type)
          this.computerBorrowChartData.push(parseInt(element.total))
        });
      }
    })
  }

  computerActive(){
    this.computerChartLabels = this.computerActiveChartLabels
    this.computerChartData = this.computerActiveChartData
    this.computerChartTitle = 'Computer Active'
  }

  computerInstockActive(){
    this.computerChartLabels = this.computerInstockChartLabels
    this.computerChartData = this.computerInstockChartData
    this.computerChartTitle = 'Computer Instock'
  }

  computerBorrowActive(){
    this.computerChartLabels = this.computerBorrowChartLabels
    this.computerChartData = this.computerBorrowChartData
    this.computerChartTitle = 'Computer 20 nb'
  }


}
