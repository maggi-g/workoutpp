/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddcategoryComponent } from './addcategory.component';

let component: AddcategoryComponent;
let fixture: ComponentFixture<AddcategoryComponent>;

describe('addcategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddcategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddcategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});