import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { workoutcategory } from '../workoutcategory';
import { workoutcollections } from '../workoutcollections';
import { WorkoutcollectionService } from '../workoutcollection.service';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
/** addworkout component*/
export class AddworkoutComponent implements OnInit {
  /** addworkout ctor */

  frmWorkout: FormGroup;
  public count: number = 0;
  categories: workoutcategory[];
  /** addworkout ctor */
  constructor(private fb: FormBuilder, private service: CategoryService, private service1: WorkoutcollectionService) {
    this.frmWorkout = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),
      Calory: new FormControl(0, Validators.required),
      Category: new FormControl()
    });



  }

  ngOnInit() {
    this.service.getCategory().subscribe(
      (data) => this.categories= data,
      (error) => alert('Error')
    );
  }

  inc() {
    this.count = this.count + 0.1;
  }

  dec() {
    if (this.count > 0) {
      this.count = this.count - 0.1;
    }
    else {
      this.count = 0;
    }
  }
  saveForm(frm: NgForm) {
    if (frm.valid) {
      let coll: workoutcollections = new workoutcollections(frm.value.Title, frm.value.Note,
        frm.value.count, frm.value.Category, frm.value.categoryid,frm.value.workoutid);
      
      this.service1.save(coll).subscribe(
        (data) => alert('Added'),
        (error) => console.log(error)
      );
    }
  }
}
