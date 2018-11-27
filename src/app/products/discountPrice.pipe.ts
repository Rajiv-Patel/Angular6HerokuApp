import {Pipe, PipeTransform} from '@angular/core';//will give you Transform method funciton


@Pipe({
    name:'discountPipe'

})

//you can only have one export and also one pipe 
export class DiscountPipe implements PipeTransform{
    transform(value: number, lessDiscount:number){
        value = value - lessDiscount;//price - 
        return value;

        // if(type === 'upper'){
        //     value=value.toUpperCase();
        // } else{
        //     value = value.toLowerCase();
        // }

    }


}