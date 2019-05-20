import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workoutcategory } from '../workoutcategory';
import { CategoryService } from '../category.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { error } from 'util';

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
    let id = this.currentRoute.snapshot.paramMap.get('id');
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
