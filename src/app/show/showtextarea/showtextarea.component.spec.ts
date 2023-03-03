import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtextareaComponent } from './showtextarea.component';

describe('ShowtextareaComponent', () => {
  let component: ShowtextareaComponent;
  let fixture: ComponentFixture<ShowtextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowtextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
