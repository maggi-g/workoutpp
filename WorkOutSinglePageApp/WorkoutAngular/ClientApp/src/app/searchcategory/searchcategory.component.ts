import { Component } from '@angular/core';

@Component({
    selector: 'app-searchcategory',
    templateUrl: './searchcategory.component.html',
    styleUrls: ['./searchcategory.component.css']
})
/** searchcategory component*/
export class SearchcategoryComponent {
    /** searchcategory ctor */
    constructor() {

  }
  Names = [
    'Jogging',
    'Sprint',
    'Walking',
    'Running',
  ]
}
