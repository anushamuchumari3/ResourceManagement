import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJDComponent } from './add-jd.component';

describe('AddJDComponent', () => {
  let component: AddJDComponent;
  let fixture: ComponentFixture<AddJDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
