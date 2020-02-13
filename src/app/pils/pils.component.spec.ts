import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilsComponent } from './pils.component';

describe('PilsComponent', () => {
  let component: PilsComponent;
  let fixture: ComponentFixture<PilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
