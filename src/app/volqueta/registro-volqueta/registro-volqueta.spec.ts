import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVolqueta } from './registro-volqueta';

describe('RegistroVolqueta', () => {
  let component: RegistroVolqueta;
  let fixture: ComponentFixture<RegistroVolqueta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVolqueta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVolqueta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
