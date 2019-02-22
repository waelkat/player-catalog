import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyerItemComponent } from './palyer-item.component';

describe('PalyerItemComponent', () => {
  let component: PalyerItemComponent;
  let fixture: ComponentFixture<PalyerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalyerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
