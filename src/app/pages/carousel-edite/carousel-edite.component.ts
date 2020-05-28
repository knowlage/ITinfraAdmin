import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { CarouselService } from '../../services/carousel.service';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-carousel-edite',
  templateUrl: './carousel-edite.component.html',
  styleUrls: ['./carousel-edite.component.scss']
})
export class CarouselEditeComponent implements OnInit {

  action = "Create"
  news_list:any
  carousel_files:any

  carouselForm = this.fb.group({
    id:[''],
    carousel_name:['', Validators.required],
    news_id:['', Validators.required],
    carousel_image_file:['', Validators.required]
  })

  constructor(private fb:FormBuilder, 
    private newsService:NewsService, 
    private carouselService:CarouselService,
    private fileService:FileService) { }

  ngOnInit() {
    this.getNews()
    this.getCarousel()
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
  }

}
