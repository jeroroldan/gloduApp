import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName',
})
export class FilterNamePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultSend = [];
    for (const post of value) {
      if (post.clientName.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSend.push(post);
      }
    }
    return resultSend;
  }
}
