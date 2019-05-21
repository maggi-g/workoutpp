/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddworkoutComponent } from './addworkout.component';

let component: AddworkoutComponent;
let fixture: ComponentFixture<AddworkoutComponent>;

describe('addworkout component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddworkoutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddworkoutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});