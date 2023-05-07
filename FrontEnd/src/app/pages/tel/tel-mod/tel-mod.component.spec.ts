import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelModComponent } from './tel-mod.component';

describe('TelModComponent', () => {
  let component: TelModComponent;
  let fixture: ComponentFixture<TelModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
