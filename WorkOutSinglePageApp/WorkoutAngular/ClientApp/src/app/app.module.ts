import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CategoryService } from './category.service';
import {CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { FilterPipe } from './filter';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    DeletecategoryComponent,
  
    FilterPipe
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'addcategory', component: AddcategoryComponent },
      { path: 'editcategory', component: EditcategoryComponent },
      { path: 'deletecategory', component: DeletecategoryComponent },
     
      
    ])
  ],
  providers: [CategoryService],
  bootstrap: [CategoryComponent]
})
export class AppModule { }
