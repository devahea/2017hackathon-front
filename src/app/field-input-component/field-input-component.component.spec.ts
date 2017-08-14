import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInputComponentComponent } from './field-input-component.component';

describe('FieldInputComponentComponent', () => {
  let component: FieldInputComponentComponent;
  let fixture: ComponentFixture<FieldInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
