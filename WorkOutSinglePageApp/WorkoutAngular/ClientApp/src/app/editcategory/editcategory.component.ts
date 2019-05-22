import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { workoutcategory } from '../workoutcategory';


@Component({
    selector: 'app-editcategory',
    templateUrl: './editcategory.component.html',
    styleUrls: ['./editcategory.component.css']
})
/** editcategory component*/
export class EditcategoryComponent implements OnInit {
  /** editcategory ctor */
  public onclick: boolean = false;
  frmcat: FormGroup;
  @Input() AddName: workoutcategory;
  @Output() EditAdded = new EventEmitter<workoutcategory>();
  @Output() Deleted = new EventEmitter<workoutcategory>();
  constructor(private currentRoute: ActivatedRoute, private service: CategoryService, private fb: FormBuilder) { }

 
  ngOnInit() {
    this.frmcat = this.fb.group({
      catname: new FormControl(this.AddName.categoryname, [Validators.required, Validators.minLength(9)]),
      id: new FormControl(this.AddName.categoryid)
    });

    this.f.catname.disable();
  }
  get f() {
    return this.frmcat.controls;
  } 
  saveForm(frm: NgForm) {
    if (frm.valid) {
      console.log(frm.value);
      let cat: workoutcategory = new workoutcategory(frm.value.id, frm.value.catname);     
      this.EditAdded.emit(cat);
      this.f.catname.disable();
      this.onclick = false;
    }

  }
  Delete(frm) {
    let cat: workoutcategory = new workoutcategory(frm.value.id, frm.value.catname);  
    this.service.delete(frm.value.catname);
    this.Deleted.emit(cat);
  }

  public Enable(): void {
    this.f.catname.enable();
    this.onclick = true;
  }
 
  
}
