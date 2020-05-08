import { Component, OnInit } from '@angular/core';
import { FaqsService } from '../../services/faqs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqsList = []
  id:any
  page:number = 1
  viewFaqs:any

  constructor(private faqsService:FaqsService, private router:Router) { }

  ngOnInit() {
   this.getFaqsAll()   
  }

  getFaqsAll(){
    this.faqsService.getFaqsAll().subscribe(rs => {
      if(rs['code'] == 1){
        this.faqsList = rs['data']
        console.log(this.faqsList)
      }
    })    
  }

  onDeactivate(id){
    this.faqsService.putDeactivateFaqs(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onActivate(id){
    this.faqsService.putActivateFaqs(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onDeleteConfirm(id){
    this.id = id
  }

  onDelete(id){
    this.faqsService.deleteFaqs(id).subscribe(rs => {
      if(rs['code'] == 1){
        this.ngOnInit()
      }
    })
  }

  onCreate(){    
    localStorage.removeItem('faqsEdit')
    this.router.navigate(['/dashboard/faqs/edit'])
  }

  onEdit(faqs){    
    localStorage.setItem('faqsEdit',JSON.stringify(faqs))
    this.router.navigate(['/dashboard/faqs/edit'])
  }

  onView(faqs){
    console.log(faqs)
    this.viewFaqs = faqs
  }

}
