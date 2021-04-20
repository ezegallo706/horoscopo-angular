import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSignComponent } from './search-sign.component';

describe('SearchSignComponent', () => {
  let component: SearchSignComponent;
  let fixture: ComponentFixture<SearchSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
