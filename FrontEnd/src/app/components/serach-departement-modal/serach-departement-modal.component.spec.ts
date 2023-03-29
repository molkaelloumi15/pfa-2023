import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDepartementModal } from './serach-departement-modal.component';

describe('SerachDepartementModalComponent', () => {
  let component: SearchDepartementModal;
  let fixture: ComponentFixture<SearchDepartementModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDepartementModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDepartementModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
