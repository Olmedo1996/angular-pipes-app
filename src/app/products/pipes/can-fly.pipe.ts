import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlayPipe implements PipeTransform {
  transform(canFly: boolean): 'vuela' | 'no vuela' {
    return (canFly) ? 'vuela' : 'no vuela';
  }
}
