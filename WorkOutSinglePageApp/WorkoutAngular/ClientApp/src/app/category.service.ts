
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { workoutcategory } from './workoutcategory';
import { Injectable } from '@angular/core';


@Injectable()


export class CategoryService {
  private _url = 'http://localhost:62373/api/category';
   
  
  constructor(private http: HttpClient) {
    
  }
  getCategory(): Observable<workoutcategory[]> {
    return this.http.get<workoutcategory[]>(this._url);
  }
  save(cat: workoutcategory) {
    return this.http.post(this._url, cat);
  }
    
}



