import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfHousingComponent } from './type-of-housing.component';

describe('TypeOfHousingComponent', () => {
  let component: TypeOfHousingComponent;
  let fixture: ComponentFixture<TypeOfHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
