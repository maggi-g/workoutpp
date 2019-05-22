import { Component, OnInit } from '@angular/core';
import { workoutcollections } from '../workoutcollections';
import { WorkoutcollectionService } from '../workoutcollection.service';

@Component({
    selector: 'app-listworkouts',
    templateUrl: './listworkouts.component.html',
    styleUrls: ['./listworkouts.component.css']
})
/** listworkouts component*/
export class ListworkoutsComponent implements OnInit {
    /** listworkouts ctor */
  searchterm: string = '';
  collections: workoutcollections[]
  constructor(private service: WorkoutcollectionService) {

  }
  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.collections = data,
      (error) => alert("Error Processing request")
    );
  }
  EditWorkout($event) {
    this.service.update($event).subscribe(
      (data) => alert('updated'),
      (error) => alert('failed to update')
    );
  }
  DeleteWorkout($event) {
    this.service.update($event.workoutid).subscribe(
      (data) => alert('updated'),
      (error) => alert('failed to update')
    );
  }
}
