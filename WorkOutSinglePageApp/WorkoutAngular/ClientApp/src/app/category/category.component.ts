import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { workoutcategory } from '../workoutcategory';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
/** Category component*/
export class CategoryComponent implements OnInit {
  /** Category ctor */
  searchterm: string = '';
  categories: workoutcategory[]
  constructor(private service: CategoryService) {

  }
  ngOnInit() {
    this.service.getCategory().subscribe(
      (data) => this.categories = data,
        (error)=> alert("Error Processing request")
    );
  }

  SaveCategory($event) {
    console.log($event);
    this.service.save(new workoutcategory(0, $event)).subscribe(
      (data) => alert('added'),
        (error) => alert('Failed to add')
    );
  }

  EditCategory($event) {
    console.log($event);
    this.service.update($event).subscribe(
      (data) => alert('updated'),
      (error) => alert('failed to update')
    );
  }
  Delete($event) {
    this.service.delete($event.categoryid).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete')
    );
  }
}

