import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'faqsSearch'
})

export class FaqsSearchPipe implements PipeTransform{
    transform(items:any, question:any){
        if(items && items.length){
            return items.filter(item => {
                if(question && item.faqs_question.toLowerCase().indexOf(question.toLowerCase()) === -1){
                    return false
                }
                return true
            })
        }else{
            return items
        }
    }
}