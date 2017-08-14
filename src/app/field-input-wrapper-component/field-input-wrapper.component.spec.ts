import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInputWrapperComponent } from './field-input-wrapper.component';

describe('FieldInputWrapperComponent', () => {
  let component: FieldInputWrapperComponent;
  let fixture: ComponentFixture<FieldInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
