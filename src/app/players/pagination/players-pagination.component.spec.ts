import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPaginationComponent } from './players-pagination.component';

describe('PlayersPaginationComponent', () => {
  let component: PlayersPaginationComponent;
  let fixture: ComponentFixture<PlayersPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
