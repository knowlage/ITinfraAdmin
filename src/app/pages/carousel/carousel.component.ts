import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousels:any
  page:number = 1
  id

  constructor(private carouselService:CarouselService, private router:Router) { }

  ngOnInit() {
    this.getCarousel()
  }

  getCarousel(){
    this.carouselService.getCarousel().subscribe(rs => {
      if(rs['code'] == 1){
        this.carousels = rs['data']
        console.log(rs['data'])
      }
    })
  }

  onPinDeactivate(id){
    this.carouselService.putPinDeactivate(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onPinActivate(id){
    this.carouselService.putPinActivate(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onDeactivate(id){
    this.carouselService.putDeactivate(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onActivate(id){
    this.carouselService.putActivate(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onCreate(){
    localStorage.removeItem('carouselEdit')
    this.router.navigate(['/dashboard/carousel/edit'])
  }

  onConfirmDelete(id){
    this.id = id
  }

  onDelete(id){
    this.carouselService.deleteCarousel(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onEdite(carousel){
    localStorage.setItem('carouselEdit',JSON.stringify(carousel))
    this.router.navigate(['/dashboard/carousel/edit'])
  }

}
