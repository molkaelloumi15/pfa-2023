import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurAddComponent } from './bur-add.component';

describe('BurAddComponent', () => {
  let component: BurAddComponent;
  let fixture: ComponentFixture<BurAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
