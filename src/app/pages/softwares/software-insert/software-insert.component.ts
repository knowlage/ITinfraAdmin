import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-software-insert',
  templateUrl: './software-insert.component.html',
  styleUrls: ['./software-insert.component.scss']
})
export class SoftwareInsertComponent implements OnInit { 
  @Input() insert_id:any
  @Input() insert_software_name:any
  @Input() insert_software_version:any 

 
  
  insertForm = this.fb.group({
    id:[''],
    software_name:['',Validators.required],
    software_version:['',Validators.required]
  })

  constructor(private fb:FormBuilder) { }

  ngOnChanges(){
    this.setValue()
  }

  ngOnInit() {
      
  } 

  setValue(){
    this.id.setValue(this.insert_id)
    this.software_name.setValue(this.insert_software_name)
    this.software_version.setValue(this.insert_software_version)
  }

  get id(){
    return this.insertForm.get('id')
  }

  get software_name(){
    return this.insertForm.get('software_name')
  }

  get software_version(){
    return this.insertForm.get('software_version')
  }

  onSubmit(){
    console.log(this.insertForm.value)
  }

}
