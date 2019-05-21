import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workoutcategory } from '../workoutcategory';
import { CategoryService } from '../category.service';

@Component({
    selector: 'app-deletecategory',
    templateUrl: './deletecategory.component.html',
    styleUrls: ['./deletecategory.component.css']
})
/** deletecategory component*/
export class DeletecategoryComponent implements OnInit {
  /** deletecategory ctor */
  cat: workoutcategory;
  constructor(private currentRoute: ActivatedRoute, private service: CategoryService) {
    
    
  }
  ngOnInit() {
    let id = this.currentRoute.snapshot.paramMap.get('categoryid');
    this.service.getById(id).subscribe(
      (data) => this.cat = data,
      (error) => alert('Not Found')
    );
  }
  delete() {
    this.service.delete(this.cat.categoryid).subscribe(
      (data) => alert('deleted'),
      (error) => alert('Failed to delete')
    );
  }
}
