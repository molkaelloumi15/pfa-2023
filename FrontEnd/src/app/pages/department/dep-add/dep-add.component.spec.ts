import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepAddComponent } from './dep-add.component';

describe('DepAddComponent', () => {
  let component: DepAddComponent;
  let fixture: ComponentFixture<DepAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
