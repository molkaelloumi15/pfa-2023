import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurModComponent } from './bur-mod.component';

describe('BurModComponent', () => {
  let component: BurModComponent;
  let fixture: ComponentFixture<BurModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
