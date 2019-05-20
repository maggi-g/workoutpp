/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SearchcategoryComponent } from './searchcategory.component';

let component: SearchcategoryComponent;
let fixture: ComponentFixture<SearchcategoryComponent>;

describe('searchcategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchcategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SearchcategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});