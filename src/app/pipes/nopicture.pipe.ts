import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nopicture'
})
export class NopicturePipe implements PipeTransform {

    transform(value: any[]): string {
        if (value) {
            return (value.length > 0) ? value[1].url : "assets/img/noimage.png";
        }
        else{
            return "";
        }
    }

}
