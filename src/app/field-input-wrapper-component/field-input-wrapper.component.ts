import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-field-input-wrapper-component',
  templateUrl: './field-input-wrapper.component.html',
  styleUrls: ['./field-input-wrapper.component.css']
})
export class FieldInputWrapperComponent implements OnInit {

  @ViewChildren('fields')
  fields: QueryList<ElementRef>;

  rows: Array<number> = [0];
  rowId: number = 1;

  form: FormGroup;
  exportTypes = ['json', 'xml', 'sql'];

  constructor(private http: HttpClient,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  getFields(){
    var ary = [];

    /*this.fields["_results"].forEach(data => {
      var name = data.name;
      var type = data.type;

      if(name =="" || type == ""){
        alert("빈칸을 채워주세요.");
        return;
      }

      var json = {name:name, type: type };
      ary.push(json);

    });*/

    for(var i = 0; i<this.fields["_results"].length;i++){
      var data = this.fields["_results"][i];
      var name = data.name;
      var type = data.type;

      if(name =="" || typeof name == "undefined"|| type == "" || typeof type == "undefined"){
        alert("빈칸을 채워주세요.");
        return;
      }

      var json = {name:name, type: type };
      ary.push(json);
    }

    console.log(ary);

    return ary;
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
      dataLength: 100,
      exportType: 'json',
      fields: this.fb.array([{fieldName: '', fieldType: ''}])
    });
  }

  onSubmit(){

    this.form.value['fieldCategoryList'] = this.getFields();

    console.log('this.form.value ... ', this.form.value);

/*

    this.http.post('http://localhost:8080/search', this.form.value).subscribe(data => {
      console.log(data);
    });
*/

  }
}
