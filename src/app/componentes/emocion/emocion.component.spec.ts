import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmocionComponent } from './emocion.component';

describe('EmocionComponent', () => {
  let component: EmocionComponent;
  let fixture: ComponentFixture<EmocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
