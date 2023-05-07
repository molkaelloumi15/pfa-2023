import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProConComponent } from './pro-con.component';

describe('ProConComponent', () => {
  let component: ProConComponent;
  let fixture: ComponentFixture<ProConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
