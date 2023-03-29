import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDirecteurModal } from './search-directeur-modal.component';

describe('SerachDirecteurComponent', () => {
  let component: SearchDirecteurModal;
  let fixture: ComponentFixture<SearchDirecteurModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDirecteurModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDirecteurModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
