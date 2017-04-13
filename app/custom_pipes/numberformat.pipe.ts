import {  
    Pipe,  
    PipeTransform  
} from '@angular/core';  
@Pipe({  
    name: 'titlecasess'  
})  
export class TitleCasePipe implements PipeTransform {  
    transform(value: number): string {  
        return "123,132"  ;
    }  
}  
