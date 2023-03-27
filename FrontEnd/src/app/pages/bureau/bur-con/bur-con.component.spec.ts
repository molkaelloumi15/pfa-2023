import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurConComponent } from './bur-con.component';

describe('BurConComponent', () => {
  let component: BurConComponent;
  let fixture: ComponentFixture<BurConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
