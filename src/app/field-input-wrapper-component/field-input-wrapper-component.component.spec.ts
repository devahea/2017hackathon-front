import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInputWrapperComponentComponent } from './field-input-wrapper-component.component';

describe('FieldInputWrapperComponentComponent', () => {
  let component: FieldInputWrapperComponentComponent;
  let fixture: ComponentFixture<FieldInputWrapperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInputWrapperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
