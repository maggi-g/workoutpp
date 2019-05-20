/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DeletecategoryComponent } from './deletecategory.component';

let component: DeletecategoryComponent;
let fixture: ComponentFixture<DeletecategoryComponent>;

describe('deletecategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DeletecategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DeletecategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});