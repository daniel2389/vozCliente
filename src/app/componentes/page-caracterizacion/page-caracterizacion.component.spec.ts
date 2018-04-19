import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCaracterizacionComponent } from './page-caracterizacion.component';

describe('PageCaracterizacionComponent', () => {
  let component: PageCaracterizacionComponent;
  let fixture: ComponentFixture<PageCaracterizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCaracterizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCaracterizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
