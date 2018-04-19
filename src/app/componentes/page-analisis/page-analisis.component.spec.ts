import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnalisisComponent } from './page-analisis.component';

describe('PageAnalisisComponent', () => {
  let component: PageAnalisisComponent;
  let fixture: ComponentFixture<PageAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
