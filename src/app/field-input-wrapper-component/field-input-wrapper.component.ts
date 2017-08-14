import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-field-input-wrapper-component',
  templateUrl: './field-input-wrapper.component.html',
  styleUrls: ['./field-input-wrapper.component.css']
})
export class FieldInputWrapperComponent implements OnInit {

  rows: Array<number> = [0];
  rowId: number = 1;
  form: FormGroup;
  categoryTypes = ['json', 'xml', 'sql'];

  constructor(private http: HttpClient,
              private fb: FormBuilder) {
    this.createForm();
  }

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


  createForm() {
    this.form = this.fb.group({
      rowNum: 100,
      categoryType: '',
      fields: this.fb.array([{fieldName: '', fieldType: ''}])
    });
  }

  submitData() {
    console.log(this);
  }

  onSubmit(event){
    console.log('this.form.value ... ', this.form.value.rowNum, this.form.value.categoryTypes);
    console.log('this.form.get ... ', this.form.get('rowNum').value, this.form.get('categoryTypes').value);
  }
}
