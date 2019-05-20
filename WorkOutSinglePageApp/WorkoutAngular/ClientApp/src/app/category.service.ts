
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { workoutcategory } from './workoutcategory';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';


@Injectable()


export class CategoryService {
  private _url = 'http://localhost:62373/api/category';
   
  
  constructor(private http: HttpClient) {
    
  }
  getCategory(): Observable<workoutcategory[]> {
    return this.http.get<workoutcategory[]>(this._url);
  }
  getById(id: string): Observable<workoutcategory> {
    return this.http.get<workoutcategory>(this._url + `/${id}`);
  }
  save(cat: workoutcategory) {
    return this.http.post(this._url, cat);
  }
  update(cat: workoutcategory) {
    return this.http.put(this._url, cat);
  }
  delete(id: number) {
    return this.http.delete(this._url + `/${id}`)
  }
 }



