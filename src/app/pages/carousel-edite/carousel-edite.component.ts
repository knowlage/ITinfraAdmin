import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { CarouselService } from '../../services/carousel.service';
import { FileService } from '../../services/file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-edite',
  templateUrl: './carousel-edite.component.html',
  styleUrls: ['./carousel-edite.component.scss']
})
export class CarouselEditeComponent implements OnInit {

  action = "Create"
  news_list:any
  carousel_files:any
  news_id_ref
  carousel_image_file_ref

  carouselForm = this.fb.group({
    id:[''],
    carousel_name:['', Validators.required],
    news_id:[''],
    carousel_image_file:['', Validators.required]
  })

  constructor(private fb:FormBuilder, 
    private newsService:NewsService, 
    private carouselService:CarouselService,
    private fileService:FileService,
    private router:Router) { }

  ngOnInit() {
    this.getNews()
    this.getCarousel()
    this.getEditCarousel()
  }

  getEditCarousel(){
    if(localStorage.getItem('carouselEdit')){      
      let carouselEdit = JSON.parse(localStorage.getItem('carouselEdit'))  

      this.carousel_name.setValue(carouselEdit.carousel_name)
      this.carousel_image_file.setValue(carouselEdit.carousel_image_file) 
      this.carousel_image_file_ref = carouselEdit.carousel_image_file
      this.news_id.setValue(carouselEdit.news_id) 
      this.news_id_ref = carouselEdit.news_id
      this.id.setValue(carouselEdit.id) 
      
      this.action = "Edit"

      
    }
  }

  get carousel_name(){
    return this.carouselForm.get('carousel_name')
  }

  get carousel_image_file(){
    return this.carouselForm.get('carousel_image_file')
  }

  get news_id(){
    return this.carouselForm.get('news_id')
  }

  get id(){
    return this.carouselForm.get('id')
  }

  getNews(){
    this.newsService.getNews().subscribe(rs => {
      if(rs['code'] == 1){
        this.news_list = rs['data']
        console.log(rs['data'])
      }
    })
  }

  getCarousel(){
    this.fileService.getCarouselFile().subscribe(rs => {
      if(rs['code'] == 1){
        this.carousel_files = rs['data']
        console.log(rs['data'])
      }
    })
  }

  onSubmit(){
    console.log(this.carouselForm.value)
    this.carouselService.insertCarousel(this.carouselForm.value).subscribe(rs => {
      if(rs['code'] == 1){
        this.router.navigate(['/dashboard/carousel'])
      }
    })
  }

}
