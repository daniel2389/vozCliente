import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDescripcionComponent } from './page-descripcion.component';

describe('PageDescripcionComponent', () => {
  let component: PageDescripcionComponent;
  let fixture: ComponentFixture<PageDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
