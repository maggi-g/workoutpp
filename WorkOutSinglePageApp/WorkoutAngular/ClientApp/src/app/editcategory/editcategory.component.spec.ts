/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditcategoryComponent } from './editcategory.component';

let component: EditcategoryComponent;
let fixture: ComponentFixture<EditcategoryComponent>;

describe('editcategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditcategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditcategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});