import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationInOutComponent } from './animation-in-out.component';

describe('AnimationInOutComponent', () => {
  let component: AnimationInOutComponent;
  let fixture: ComponentFixture<AnimationInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
