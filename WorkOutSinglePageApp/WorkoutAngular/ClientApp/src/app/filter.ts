import { Pipe, PipeTransform } from '@angular/core';
import { workoutcategory } from './workoutcategory';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(categories: workoutcategory[], searchterm: string): workoutcategory[] {
    if (!categories) return [];
    if (!searchterm) return categories;

    return categories.filter(x => x.categoryname.toLowerCase().startsWith(searchterm.toLowerCase()))
}
}

