import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { workoutcategory } from '../Category';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
/** Category component*/
export class CategoryComponent implements OnInit {
  /** Category ctor */
  categories: workoutcategory[];
  constructor(private service: CategoryService) {

  }
  ngOnInit() {
    this.service.getCategory().subscribe(
      (data) => this.categories = data,
        (error)=> alert("Error Processing request")
    );
  }
}
