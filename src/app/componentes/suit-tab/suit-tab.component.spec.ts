import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitTabComponent } from './suit-tab.component';

describe('SuitTabComponent', () => {
  let component: SuitTabComponent;
  let fixture: ComponentFixture<SuitTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
