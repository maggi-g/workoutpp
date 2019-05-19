import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddCategoryComponent } from './add-category.component';

let component: AddCategoryComponent;
let fixture: ComponentFixture<AddCategoryComponent>;

describe('AddCategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddCategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddCategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
