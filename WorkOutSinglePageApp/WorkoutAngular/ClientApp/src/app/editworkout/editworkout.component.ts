import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { workoutcollections } from '../workoutcollections';
import { WorkoutcollectionService } from '../workoutcollection.service'; 
@Component({
    selector: 'app-editworkout',
    templateUrl: './editworkout.component.html',
    styleUrls: ['./editworkout.component.css']
})
/** editworkout component*/
export class EditworkoutComponent implements OnInit{
    /** editworkout ctor */
  public onclick: boolean = false;
  frmcoll: FormGroup;
  @Input() AddTitle: workoutcollections;

  @Output() EditAdded = new EventEmitter<workoutcollections>();
  @Output() Deleted = new EventEmitter<workoutcollections>();
  constructor(private currentRoute: ActivatedRoute, private service: WorkoutcollectionService, private fb: FormBuilder) { }
  ngOnInit() {
    this.frmcoll = this.fb.group({
      title: new FormControl(this.AddTitle.workouttitle, [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('categoryid');
  }
  get f() {
    return this.frmcoll.controls;
  }
  saveForm(frm: NgForm) {
    if (frm.valid) {
      let coll: workoutcollections = new workoutcollections(frm.value.Title, frm.value.Note, frm.value.count,
        frm.value.Category, frm.value.categoryid, frm.value.workoutid);
      this.service.update(coll).subscribe(
        (data) => alert('Updated'),
        (error) => console.log(error)
        

      );
      this.EditAdded.emit(coll);
      this.f.title.disable();
      this.onclick = false;
    }
  }
    public Enable(): void {
    this.f.title.enable();
    this.onclick = true;
  }

  public Disabled(): void {
    this.f.title.disable();
    this.onclick = false;
  }
}


