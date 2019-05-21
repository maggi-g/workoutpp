import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { workoutcollections } from './workoutcollections';

@Injectable()
export class WorkoutcollectionService {
 
private _url = 'http://localhost:62373/api/workout';
constructor(private http: HttpClient) { }

  getAll(): Observable<workoutcollections[]> {
  return this.http.get<workoutcollections[]>(this._url);
}

  getById(id: string): Observable<workoutcollections> {
    return this.http.get<workoutcollections>(this._url + `/${id}`);
}

  save(coll: workoutcollections) {
  return this.http.post(this._url, coll);
}

  update(coll: workoutcollections) {
  return this.http.put(this._url, coll);
}


}
