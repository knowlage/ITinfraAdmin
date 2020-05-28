import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FileService } from '../../services/file.service';
import { DownloadService } from '../../services/download.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download-edite',
  templateUrl: './download-edite.component.html',
  styleUrls: ['./download-edite.component.scss']
})
export class DownloadEditeComponent implements OnInit {

  fileDownloadForm = this.fb.group({
    id:[''],
    uploadTitle:['', Validators.required],
    uploadFilename:['', Validators.required],
    uploadFiletype:['']
  })
  uploadFile:any
  action = 'Create'
  selected:any

  constructor( private fb: FormBuilder, 
    private fileService:FileService, 
    private downloadService:DownloadService,
    private router:Router) { }

  ngOnInit() {
    this.getUploadFile()
    this.getEditeDownload()
  }

  getUploadFile(){
    this.fileService.getUploadFile().subscribe(rs => {
      this.uploadFile = rs['data']
      console.log(rs['data'])
    })
  }

  onSubmit(){
    console.log(this.fileDownloadForm.value)
    this.downloadService.postInsertDownload(this.fileDownloadForm.value).subscribe(rs => {
      if(rs['code'] == 1){
        this.router.navigate(['/dashboard/download'])
        localStorage.removeItem('downloadFileEdit')
      }
    })
  }

  getEditeDownload(){
    if(localStorage.getItem('downloadFileEdit')){      
      let downloadEdit = JSON.parse(localStorage.getItem('downloadFileEdit'))  

      this.uploadTitle.setValue(downloadEdit.upload_title)
      this.uploadFilename.setValue(downloadEdit.upload_filename) 
      this.selected =  downloadEdit.upload_filename   
      this.id.setValue(downloadEdit.id)
      this.action = "Edit"

      
    }
  }

  get uploadTitle(){
    return this.fileDownloadForm.get('uploadTitle')
  }

  get uploadFilename(){
    return this.fileDownloadForm.get('uploadFilename')
  }

  get id(){
    return this.fileDownloadForm.get('id')
  }

}
