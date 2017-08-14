import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOptionComponentComponent } from './set-option-component.component';

describe('SetOptionComponentComponent', () => {
  let component: SetOptionComponentComponent;
  let fixture: ComponentFixture<SetOptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOptionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
