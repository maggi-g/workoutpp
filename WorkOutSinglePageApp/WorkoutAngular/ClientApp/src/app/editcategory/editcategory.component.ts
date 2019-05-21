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
      name: new FormControl(this.AddName.categoryname, [Validators.required, Validators.minLength(3)])
    });

    let id = this.currentRoute.snapshot.paramMap.get('categoryid');
  }
  get f() {
    return this.frmcat.controls;
  } 
  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cat: workoutcategory = new workoutcategory(frm.value.categoryid, frm.value.categoryname);
      this.service.update(cat).subscribe(
        (data) => alert('Updated'),
        (error) => console.log(error)

      );
    }

  }

  public Enable(): void {
    this.f.categoryname.enable();
    this.onclick = true;
  }

  public Disabled(): void {
    this.f.categoryname.disable();
    this.onclick = false;
  }
}
