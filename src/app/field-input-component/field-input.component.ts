import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FieldInputWrapperComponent} from "../field-input-wrapper-component/field-input-wrapper.component";
import {wrappedError} from "@angular/core/src/error_handler";
import {Field} from "./field";

@Component({
  selector: 'app-field-input-component',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css']
})
export class FieldInputComponent implements OnInit {

  @Input('wrapper') wrapper: FieldInputWrapperComponent;
  @Input('rowId') rowId: number;

  @Input('name') name: string;
  @Input('type') type: string;

  constructor() { }

  ngOnInit() {
  }

  test(){alert("test");}

}
