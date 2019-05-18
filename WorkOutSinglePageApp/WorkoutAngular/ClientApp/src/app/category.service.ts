
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { workoutcategory } from './Category';
import { Injectable } from '@angular/core';


@Injectable() 


export class CategoryService {
  private _url = ' http://localhost:53527/api/categories';
   
  
  constructor(private http: HttpClient) {
    
  }
  getCategory(): Observable<workoutcategory[]> {
    return this.http.get<workoutcategory[]>(this._url);
  }
    
  }


