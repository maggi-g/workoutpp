import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { workoutcategory } from './Category';
@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {
    
  }
  getCategory(): Observable<workoutcategory[]> {
    private url: 'http://localhost:53527/';
    this.http.Get();
this.url;
  }
}

