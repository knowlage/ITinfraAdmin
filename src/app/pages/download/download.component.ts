import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { DownloadService } from '../../services/download.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  files:any
  page:number = 1
  id:any

  constructor(private fileService: FileService, private downloadService:DownloadService, private router:Router) { }

  ngOnInit() {
    this.getFile()
  }

  getFile(){    
    this.downloadService.getDownloadAll().subscribe(rs => {
      if(rs['code'] == 1){
        this.files = rs['data']
      }
    })
  }

  onDeleteConfirm(id){
    this.id = id
  }

  onDelete(id){
    this.downloadService.deleteDownload(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onPinActivate(id){
    this.downloadService.pinActivateDownload(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onPinDeactivate(id){
    this.downloadService.pinDeactivateDownload(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onDeactivate(id){
    this.downloadService.deactivateDownload(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onActivate(id){
    this.downloadService.activateDownload(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onCreate(){
    localStorage.removeItem('downloadFileEdit')
    this.router.navigate(['/dashboard/download/edit'])
  }

  onFileExport(title){

  }

  onEdite(downloadFile){
    localStorage.setItem('downloadFileEdit',JSON.stringify(downloadFile))
    this.router.navigate(['/dashboard/download/edit'])
  }

 

}
