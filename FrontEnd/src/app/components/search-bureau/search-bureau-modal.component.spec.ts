import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBureauModal } from './search-bureau-modal.component';

describe('SearchBureauComponent', () => {
  let component: SearchBureauModal;
  let fixture: ComponentFixture<SearchBureauModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBureauModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBureauModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
