import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelAddComponent } from './tel-add.component';

describe('TelAddComponent', () => {
  let component: TelAddComponent;
  let fixture: ComponentFixture<TelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
