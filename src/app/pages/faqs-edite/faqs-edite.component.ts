import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, Validators} from '@angular/forms';
import { FaqsService } from '../../services/faqs.service';
import { FileService } from '../../services/file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs-edite',
  templateUrl: './faqs-edite.component.html',
  styleUrls: ['./faqs-edite.component.scss']
})
export class FaqsEditeComponent implements OnInit {
  Editor = ClassicEditor;
  action = "Create"
  faqsForm = this.fb.group({
    id:[''],
    question:['',Validators.required],
    answer:['',Validators.required],
    state:['']
  })

  fileForm = this.fb.group({    
    file:['', Validators.required]
  })

  fileSelect = this.fb.group({
    title:[''],
    link:['']
  })


  files:any = [
    // {"id":"id", "upload_title":"title", "upload_filename":"filename", "upload_filetype"}
  ]

  constructor(private fb:FormBuilder, 
    private faqsService:FaqsService, 
    private router:Router,
    private fileService:FileService) { }

  ngOnInit() {
    this.getFiles()
    this.getEditeFaqs()
  }

  getEditeFaqs(){
    if(localStorage.getItem('faqsEdit')){      
      let faqsEdit = JSON.parse(localStorage.getItem('faqsEdit'))  

      this.faqsFormQuestion.setValue(faqsEdit.faqs_question)
      this.faqsFormAnswer.setValue(faqsEdit.faqs_answer)
      this.faqsFormId.setValue(faqsEdit.id)
      
      this.action = "Edit"
    }
  }

  onSubmit(){    
    this.faqsService.insertFaqs(this.faqsForm.value).subscribe(rs => {
      if(rs['code'] == 1){
        this.router.navigate(['/dashboard/faqs'])
        localStorage.removeItem('faqsEdit')
      }
    })
    
  }

  getFiles(){
    this.fileService.getFiles().subscribe(rs => {
      if(rs['code'] == 1){
        this.files = rs['data']
      }      
    })
  }

  onSelectFile(){
    let downloadLink = "http://localhost:8000/download/file/"+this.link.value
    let insert = "<a href='"+downloadLink+"'>"+this.title.value+"</a>"
    let answer = this.faqsFormAnswer.value + insert    
    this.faqsFormAnswer.setValue(answer)
  }

  onChange(){    
    this.link.setValue(this.file.value.upload_filename)
    this.title.setValue(this.file.value.upload_title)
    
  }


  get link(){
    return this.fileSelect.get('link')
  }

  get title(){
    return this.fileSelect.get('title')
  }

  get faqsFormAnswer(){
    return this.faqsForm.get('answer')
  }

  get faqsFormQuestion(){
    return this.faqsForm.get('question')
  }

  get faqsFormId(){
    return this.faqsForm.get('id')
  }

  
  get file() {
    return this.fileForm.get('file')
  }


}
