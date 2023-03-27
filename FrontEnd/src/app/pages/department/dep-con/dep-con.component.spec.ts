import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepConComponent } from './dep-con.component';

describe('DepConComponent', () => {
  let component: DepConComponent;
  let fixture: ComponentFixture<DepConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
