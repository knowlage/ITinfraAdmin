import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SoftwareService } from '../../../services/software.service';

@Component({
  selector: 'app-software-softwares',
  templateUrl: './software-softwares.component.html',
  styleUrls: ['./software-softwares.component.scss']
})
export class SoftwareSoftwaresComponent implements OnInit {

  software:any
  software_id:any
  softwareList:any  
  

  insert_id:any
  insert_software_name:any
  insert_software_version:any

  softwareForm = this.fb.group({
    software_name:['',Validators.required]
  })

  constructor(private fb:FormBuilder, private softwareService:SoftwareService) { }

  ngOnInit() {
    this.getSoftwares()    
  }

  getSoftwares(){
    this.softwareService.getSoftwares().subscribe(rs => {
      if(rs['code'] == 1){
        this.softwareList = rs['data']
      }
    })

  }

  onSubmit(){
    console.log('click')
  }

  onReset(){
    this.ngOnInit()
  }

  onDeactivate(id){
    this.softwareService.deactivateSoftware(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onActivate(id){
    this.softwareService.activateSoftware(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onDeleteSoftware(id){
    this.softwareService.deleteSoftware(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onDeleteConfirm(software){
    this.software = software.software_name + ' ' +software.software_version
    this.software_id = software.id
  }

  onEdit(software){
    this.insert_id = software.id
    this.insert_software_name = software.software_name
    this.insert_software_version = software.software_version
  }

  onCreate(){
    this.insert_id = ''
    this.insert_software_name = ''
    this.insert_software_version = ''
  }

}
