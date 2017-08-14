import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FieldInputWrapperComponent} from "../field-input-wrapper-component/field-input-wrapper.component";
import {wrappedError} from "@angular/core/src/error_handler";

@Component({
  selector: 'app-field-input-component',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css']
})
export class FieldInputComponent implements OnInit {

  @Input('wrapper') wrapper: FieldInputWrapperComponent;
  @Input('rowId') rowId: number;

  constructor() { }

  ngOnInit() {
  }

}
