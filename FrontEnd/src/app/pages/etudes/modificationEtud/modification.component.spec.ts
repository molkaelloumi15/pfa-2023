import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudModificationComponent } from './modification.component';

describe('ModificationComponent', () => {
  let component: EtudModificationComponent;
  let fixture: ComponentFixture<EtudModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudModificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
