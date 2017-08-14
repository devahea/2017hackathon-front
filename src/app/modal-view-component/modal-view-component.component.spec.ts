import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewComponentComponent } from './modal-view-component.component';

describe('ModalViewComponentComponent', () => {
  let component: ModalViewComponentComponent;
  let fixture: ComponentFixture<ModalViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
