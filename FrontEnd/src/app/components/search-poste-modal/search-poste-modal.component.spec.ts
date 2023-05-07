import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPosteModal } from './search-poste-modal.component';

describe('SearchPosteModalComponent', () => {
  let component: SearchPosteModal;
  let fixture: ComponentFixture<SearchPosteModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPosteModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPosteModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
