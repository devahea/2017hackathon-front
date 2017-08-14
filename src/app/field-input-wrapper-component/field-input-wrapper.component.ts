import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-field-input-wrapper-component',
  templateUrl: './field-input-wrapper.component.html',
  styleUrls: ['./field-input-wrapper.component.css']
})
export class FieldInputWrapperComponent implements OnInit {

  rows: Array<number> = [0];
  rowId: number = 1;

  constructor() { }

  ngOnInit() {
  }

  createFieldInput(){
    this.rows.push(this.rowId++);
  }

  removeFieldInput(rowId){
    if(this.rows.length == 1){
      alert("더 이상 삭제할 수 없습니다.");
      return;
    }

    let rowIndex = this.rows.indexOf(rowId);
    this.rows.splice(rowIndex, 1);

  }
}
