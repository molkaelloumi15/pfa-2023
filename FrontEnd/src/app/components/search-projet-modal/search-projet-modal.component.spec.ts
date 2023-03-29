import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjetModal } from './search-projet-modal.component';

describe('SearchProjetModalComponent', () => {
  let component: SearchProjetModal;
  let fixture: ComponentFixture<SearchProjetModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProjetModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProjetModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
