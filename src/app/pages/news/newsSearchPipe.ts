import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'newsSearch'
})

export class NewsSearchPipe implements PipeTransform{
    transform(items:any, title:any){
        if(items && items.length){
            return items.filter(item => {
                if(title && item.news_title.toLowerCase().indexOf(title.toLowerCase()) === -1){
                    return false
                }
                return true
            })
        }else{
            return items
        }
    }
}
