import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResManagementViewComponent } from './res-management-view.component';

describe('ResManagementViewComponent', () => {
  let component: ResManagementViewComponent;
  let fixture: ComponentFixture<ResManagementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResManagementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
