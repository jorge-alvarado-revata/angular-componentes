import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInputChipComponent } from './show-input-chip.component';

describe('ShowInputChipComponent', () => {
  let component: ShowInputChipComponent;
  let fixture: ComponentFixture<ShowInputChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInputChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInputChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
