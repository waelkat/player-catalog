import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyersListComponent } from './palyers-list.component';

describe('PalyersListComponent', () => {
  let component: PalyersListComponent;
  let fixture: ComponentFixture<PalyersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalyersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
