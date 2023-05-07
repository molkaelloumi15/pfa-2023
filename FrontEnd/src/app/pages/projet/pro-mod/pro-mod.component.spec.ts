import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProModComponent } from './pro-mod.component';

describe('ProModComponent', () => {
  let component: ProModComponent;
  let fixture: ComponentFixture<ProModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
