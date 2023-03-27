import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpConComponent } from './emp-con.component';

describe('EmpConComponent', () => {
  let component: EmpConComponent;
  let fixture: ComponentFixture<EmpConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
