import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'carouselSearch'
})

export class carouselSearchPipe implements PipeTransform{
    transform(items:any, title:any){
        if(items && items.length){
            return items.filter(item => {
                if(title && item.carousel_name.toLowerCase().indexOf(title.toLowerCase()) === -1){
                    return false
                }
                return true
            })
        }else{
            return items
        }
    }
}