import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SoftwareService } from '../../../services/software.service';

@Component({
  selector: 'app-software-search-by-employeenumber',
  templateUrl: './software-search-by-employeenumber.component.html',
  styleUrls: ['./software-search-by-employeenumber.component.scss']
})
export class SoftwareSearchByEmployeenumberComponent implements OnInit {

  softwareSearch:any
  softwareSearchForm = this.fb.group({
    employeenumber:['', Validators.required]
  })

  constructor(private fb:FormBuilder, private softwareService:SoftwareService) { }

  ngOnInit() {
  }

  get employeenumber(){
    return this.softwareSearchForm.get('employeenumber')
  }

  onSubmit(){        
    this.softwareService.getSoftwareByEmployeenumber(this.employeenumber.value).subscribe(rs => {      
      this.softwareSearch = rs['data']
    })
  }

}
