import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEtudeModal } from './search-etude-modal.component';

describe('SearchEtudeModalComponent', () => {
  let component: SearchEtudeModal;
  let fixture: ComponentFixture<SearchEtudeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEtudeModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEtudeModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
