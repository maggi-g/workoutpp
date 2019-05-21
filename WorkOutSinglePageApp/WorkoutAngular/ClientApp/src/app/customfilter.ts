import { Pipe, PipeTransform } from '@angular/core';

import { workoutcollections } from './workoutcollections';

@Pipe({
  name: 'customfilter'
})
export class SearchPipe implements PipeTransform {
  transform(collections: workoutcollections[], title: string): workoutcollections[] {
    if (!collections) return [];
    if (!title) return collections;

    return collections.filter(x => x.workouttitle.toLowerCase().startsWith(title.toLowerCase()))
  }
}


