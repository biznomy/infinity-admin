import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'numberFormat'
})
export class NumberFormat implements PipeTransform {
    transform(value: any): string {
        if(value !== undefined)
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
