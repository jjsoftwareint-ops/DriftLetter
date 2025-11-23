import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteLetter } from './write-letter';

describe('WriteLetter', () => {
  let component: WriteLetter;
  let fixture: ComponentFixture<WriteLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteLetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
