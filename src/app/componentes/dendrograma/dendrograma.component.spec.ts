import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DendrogramaComponent } from './dendrograma.component';

describe('DendrogramaComponent', () => {
  let component: DendrogramaComponent;
  let fixture: ComponentFixture<DendrogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DendrogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DendrogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
