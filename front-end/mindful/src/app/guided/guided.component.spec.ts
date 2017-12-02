import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedComponent } from './guided.component';

describe('GuidedComponent', () => {
  let component: GuidedComponent;
  let fixture: ComponentFixture<GuidedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
