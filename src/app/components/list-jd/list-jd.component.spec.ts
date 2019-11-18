import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJDComponent } from './list-jd.component';

describe('ListJDComponent', () => {
  let component: ListJDComponent;
  let fixture: ComponentFixture<ListJDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
