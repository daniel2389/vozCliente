import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisSentimientoComponent } from './analisis-sentimiento.component';

describe('AnalisisSentimientoComponent', () => {
  let component: AnalisisSentimientoComponent;
  let fixture: ComponentFixture<AnalisisSentimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisSentimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisSentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
