import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';

import { FilterPipe } from './filter';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { WorkoutcollectionService } from './workoutcollection.service';
import { ListworkoutsComponent } from './listworkouts/listworkouts.component';
import { SearchPipe } from './customfilter';
import { EditworkoutComponent } from './editworkout/editworkout.component';
import { CategoryService } from './category.service';
@NgModule({
  declarations: [
    AppComponent,
  
    CounterComponent,
  
    CategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    
    AddworkoutComponent,
    ListworkoutsComponent,
    EditworkoutComponent,
    FilterPipe,
    SearchPipe
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
     { path: 'counter', component: CounterComponent },
      
      { path: 'category', component: CategoryComponent },
      { path: 'addcategory', component: AddcategoryComponent },
      { path: 'editcategory', component: EditcategoryComponent },
     { path: 'addworkout', component: AddworkoutComponent },
      { path: 'editworkout', component: EditworkoutComponent },
      { path: 'listworkouts', component: ListworkoutsComponent }
    ])
  ],
  providers: [WorkoutcollectionService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }


