import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemManage'
})
export class ItemManagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args);
    return value;
  }

}
