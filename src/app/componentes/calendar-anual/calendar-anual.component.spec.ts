import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAnualComponent } from './calendar-anual.component';

describe('CalendarAnualComponent', () => {
  let component: CalendarAnualComponent;
  let fixture: ComponentFixture<CalendarAnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarAnualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
