/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditworkoutComponent } from './editworkout.component';

let component: EditworkoutComponent;
let fixture: ComponentFixture<EditworkoutComponent>;

describe('editworkout component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditworkoutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditworkoutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});