import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSignsComponent } from './main-signs.component';

describe('MainSignsComponent', () => {
  let component: MainSignsComponent;
  let fixture: ComponentFixture<MainSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
