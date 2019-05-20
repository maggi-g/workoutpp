import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { workoutcategory } from '../workoutcategory';
import { CategoryService } from '../category.service';


@Component({
    selector: 'app-addcategory',
    templateUrl: './addcategory.component.html',
    styleUrls: ['./addcategory.component.css']
})
/** addcategory component*/
export class AddcategoryComponent implements OnInit {
    frmcat: FormGroup;
  @Output() CategoryAdded = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private service: CategoryService) { }


ngOnInit() {
  this.frmcat = this.fb.group({

    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
}

get f() {
  return this.frmcat.controls;
}

saveForm(frm: NgForm) {
  if (frm.valid) {
    let cat: workoutcategory = new workoutcategory(frm.value.id, frm.value.name);
    this.service.save(cat).subscribe(
      (data) => alert('Added'),
      (error) => console.log(error)
    );
  }
} 
}
