import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticStudentReportComponent } from './automatic-student-report.component';

describe('AutomaticStudentReportComponent', () => {
  let component: AutomaticStudentReportComponent;
  let fixture: ComponentFixture<AutomaticStudentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticStudentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticStudentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
