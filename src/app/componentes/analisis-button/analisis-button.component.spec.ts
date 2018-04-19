import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisButtonComponent } from './analisis-button.component';

describe('AnalisisButtonComponent', () => {
  let component: AnalisisButtonComponent;
  let fixture: ComponentFixture<AnalisisButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
