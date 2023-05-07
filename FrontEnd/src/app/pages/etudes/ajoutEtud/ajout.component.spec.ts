import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudAjoutComponent } from './ajout.component';

describe('AjoutComponent', () => {
  let component: EtudAjoutComponent;
  let fixture: ComponentFixture<EtudAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
