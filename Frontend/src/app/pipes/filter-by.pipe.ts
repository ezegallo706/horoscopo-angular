import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(value: any, type: string): any {

    value.sort((a: any, b: any) => {
      if (type === 'name') {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a.init_date.slice(-2) < b.init_date.slice(-2)) {
          return -1;
        } else if (a.init_date.slice(-2) > b.init_date.slice(-2)) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return value;

  }





}
