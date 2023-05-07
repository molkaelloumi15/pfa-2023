import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpModComponent } from './emp-mod.component';

describe('EmpModComponent', () => {
  let component: EmpModComponent;
  let fixture: ComponentFixture<EmpModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
