import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { workoutcategory } from '../workoutcategory';
@Component({

    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})
/** AddCategory component*/
export class AddCategoryComponent implements OnInit{
  frmCat: FormGroup;
  constructor(private fb: FormBuilder, private service: CategoryService) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  get f() {
    return this.frmCat.controls;
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cat: workoutcategory = new workoutcategory(frm.value.id, frm.value.name);
      this.service.save(cat).subscribe(
        (data) => alert('Added'),
        (error) => alert('Error Processing request')
      );
    }
  }
}
