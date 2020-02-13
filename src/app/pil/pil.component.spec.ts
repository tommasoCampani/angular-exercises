import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilComponent } from './pil.component';

describe('PilComponent', () => {
  let component: PilComponent;
  let fixture: ComponentFixture<PilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
