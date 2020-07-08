import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../../../services/software.service';

@Component({
  selector: 'app-software-info',
  templateUrl: './software-info.component.html',
  styleUrls: ['./software-info.component.scss']
})
export class SoftwareInfoComponent implements OnInit {

  softwareBalance = []

  constructor(private softwareService:SoftwareService) { }

  ngOnInit() {
    this.getSoftwareBalance()
  }

  
  getSoftwareBalance(){
    this.softwareService.getSoftwareBalance().subscribe(rs => {
      if(rs["code"] == 1){
        this.softwareBalance = rs['data']
      }
    })
  }


}
