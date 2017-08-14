import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-field-input-wrapper-component',
  templateUrl: './field-input-wrapper.component.html',
  styleUrls: ['./field-input-wrapper.component.css']
})
export class FieldInputWrapperComponent implements OnInit {

  rows: Array<number> = [0, 1, 2 ,3 ,4];
  rowId: number = 5;

  constructor() { }

  ngOnInit() {
  }

  createFieldInput(){
    this.rows.push(this.rowId++);
  }

  removeFieldInput(rowId){
    if(this.rows.length == 1){
      return;
    }

    let index = this.rows.indexOf(rowId);
    this.rows.splice(index, 1);
  }
}
