import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuenciasDatatableComponent } from './frecuencias-datatable.component';

describe('FrecuenciasDatatableComponent', () => {
  let component: FrecuenciasDatatableComponent;
  let fixture: ComponentFixture<FrecuenciasDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrecuenciasDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuenciasDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
