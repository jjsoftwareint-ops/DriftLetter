import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Letterbox } from './letterbox';

describe('Letterbox', () => {
  let component: Letterbox;
  let fixture: ComponentFixture<Letterbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Letterbox],
    }).compileComponents();

    fixture = TestBed.createComponent(Letterbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
