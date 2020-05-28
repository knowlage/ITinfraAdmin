import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileUpload = this.fb.group({
    file:['',Validators.required],
    fileSource:['']
  })
  files:any
  file:any


  constructor(private fb:FormBuilder, private fileService:FileService) { }

  ngOnInit() {
    this.getUploadFile()
  }

  getUploadFile(){
    this.fileService.getUploadFile().subscribe(rs => {
      if(rs['code'] == 1){
        this.files = rs['data']  
        console.log(rs)      
      }
    })
  }

  onFileChange(event){
    if(event.target.files.length > 0){
      let file = event.target.files[0]
      console.log(file)
      this.fileUpload.patchValue({
        fileSource:file
      })
    }
  }

  onSubmit(){
    let formData = new FormData()
    formData.append('file', this.fileUpload.get('fileSource').value)

    this.fileService.postUpload(formData).subscribe(rs => {
      console.log(rs['message'])
      this.fileUpload.reset()
      this.ngOnInit()
    })
    
  }

  onDeleteFile(file){
    console.log(file)
    this.fileService.deleteUploadFile(file).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onDeleteConfirm(file){    
    this.file = file
  }

  onDownloadFile(file){
    this.fileService.getDownload(file)
  }

}
