import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyerDetailComponent } from './palyer-detail.component';

describe('PalyerDetailComponent', () => {
  let component: PalyerDetailComponent;
  let fixture: ComponentFixture<PalyerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalyerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
