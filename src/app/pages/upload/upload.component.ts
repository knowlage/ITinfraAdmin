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

  carouselUpload = this.fb.group({
    file:['',Validators.required],
    fileSource:['']  })

  carousels:any
  carousel:any


  constructor(private fb:FormBuilder, private fileService:FileService) { }

  ngOnInit() {
    this.getUploadFile()
    this.getCarouselFile()
  }

  getUploadFile(){
    this.fileService.getUploadFile().subscribe(rs => {
      if(rs['code'] == 1){
        this.files = rs['data']  
        // console.log(rs)      
      }
    })
  }

  getCarouselFile(){
    this.fileService.getCarouselFile().subscribe(rs => {
      if(rs['code'] == 1){
        this.carousels = rs['data']
        console.log(rs['data'])
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

  onCarouselChange(event){
    if(event.target.files.length > 0){
      let file = event.target.files[0]
      console.log(file)
      this.carouselUpload.patchValue({
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

  onCarouselSubmit(){
    let formData = new FormData()
    formData.append('file', this.carouselUpload.get('fileSource').value)

    this.fileService.postUploadCarousel(formData).subscribe(rs => {
      this.carouselUpload.reset()
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

  onDeleteCarouselConfirm(carousel){
    this.carousel = carousel
  }

  onDeleteCarousel(carousel){
    console.log(carousel)
    this.fileService.deleteCarouselFile(carousel).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

}
