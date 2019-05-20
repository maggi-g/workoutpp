import { Component, OnInit, Input } from '@angular/core';
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
  public click: boolean = true;
  frmcat: FormGroup;
  @Input() AddName: workoutcategory;

  constructor(private currentRoute: ActivatedRoute, private service: CategoryService, private fb: FormBuilder) { }
  get f() {
    return this.frmcat.controls;
  }
  ngOnInit() {
    this.frmcat = this.fb.group({
      name: new FormControl(this.AddName.categoryname, [Validators.required, Validators.minLength(3)])
    });

    let id = this.currentRoute.snapshot.paramMap.get('id');
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cat: workoutcategory = new workoutcategory(frm.value.id, frm.value.name);
      this.service.update(cat).subscribe(
        (data) => alert('Updated'),
        (error) => console.log(error)

      );
    }

  }

  public Enable(): void {
    this.f.name.enable();
  }

  public Disabled(): void {
    this.f.name.disable();
  }
}
