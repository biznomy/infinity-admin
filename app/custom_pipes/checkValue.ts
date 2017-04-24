import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'validate'
})
export class checkValue implements PipeTransform {
    transform(value: any): string {
        var bool = "";
        if(value !== undefined && value !== null && value !== "" && value.files !== undefined && value.files.url !== undefined)
        bool = value.files.url;
        return bool
    }
}
