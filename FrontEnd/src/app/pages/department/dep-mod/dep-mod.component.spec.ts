import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepModComponent } from './dep-mod.component';

describe('DepModComponent', () => {
  let component: DepModComponent;
  let fixture: ComponentFixture<DepModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
