import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, Validators} from '@angular/forms';
import { FileService } from '../../services/file.service';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-edite',
  templateUrl: './news-edite.component.html',
  styleUrls: ['./news-edite.component.scss']
})
export class NewsEditeComponent implements OnInit {

  public Editor = ClassicEditor;
  public news:any = {"title":"", "text":"", "state":0, "pin":0}

  newsForm = this.fb.group({
    id:[''],
    title:['',Validators.required],
    text:['',Validators.required],
    state:[''],
    pin:['']
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

  action = "Create"
  

  constructor(private fb:FormBuilder, 
    private fileService:FileService, 
    private newsService:NewsService,
    private router:Router) { }

  ngOnInit() {
    this.getFiles()  
    this.getEditeNews()  
    
  }
  getEditeNews(){
    if(localStorage.getItem('newsEdit')){      
      let newsEdit = JSON.parse(localStorage.getItem('newsEdit'))  

      this.newsFormTitle.setValue(newsEdit.news_title)
      this.newsFormText.setValue(newsEdit.news_text)
      this.newsFormId.setValue(newsEdit.id)
      this.action = "Edit"
    }
  }

  getFiles(){
    this.fileService.getFiles().subscribe(rs => {
      if(rs['code'] == 1){
        this.files = rs['data']
      }      
    })
  }

  onSubmit(){      
    this.newsService.insertNews(this.newsForm.value).subscribe(rs => {
      if(rs['code'] == 1){
        this.router.navigate(['/dashboard/news'])
        localStorage.removeItem('newsEdit')
      }
    })
  }

  onSelectFile(){
    let downloadLink = "http://localhost:8000/download/"+this.link.value
    let insert = "<a href='"+downloadLink+"'>"+this.title.value+"</a>"
    let text = this.newsFormText.value + insert    
    this.newsFormText.setValue(text)
  }

  onChange(){    
    this.link.setValue(this.file.value.upload_filename)
    this.title.setValue(this.file.value.upload_title)
    
  }



  get file() {
    return this.fileForm.get('file')
  }

  get newsFormId(){
    return this.newsForm.get('id')
  }
  
  get newsFormText(){
    return this.newsForm.get('text')
  }

  get newsFormTitle(){
    return this.newsForm.get('title')
  }

  get newsFormState(){
    return this.newsForm.get('state')
  }

  get newsFormPin(){
    return this.newsForm.get('pin')
  }

  get link(){
    return this.fileSelect.get('link')
  }

  get title(){
    return this.fileSelect.get('title')
  }

}
