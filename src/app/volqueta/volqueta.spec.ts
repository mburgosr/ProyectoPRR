import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Volqueta } from './volqueta';

describe('Volqueta', () => {
  let component: Volqueta;
  let fixture: ComponentFixture<Volqueta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Volqueta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Volqueta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
