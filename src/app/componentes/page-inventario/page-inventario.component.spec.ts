import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInventarioComponent } from './page-inventario.component';

describe('PageInventarioComponent', () => {
  let component: PageInventarioComponent;
  let fixture: ComponentFixture<PageInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
