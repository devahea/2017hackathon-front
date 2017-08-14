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

  result: object;

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
      var categoryType = null;
      var dataType = null;
      var regularExpression = null;
      var conditions = null;

      if(name =="" || typeof name == "undefined"|| type == "" || typeof type == "undefined"){
        alert("빈칸을 채워주세요.");
        return;
      }

      if(type == "name"){
        categoryType = "Repo";
        dataType = "1";
        regularExpression = "";
      }else if(type == "date"){
        categoryType = "Date";
        dataType = "string";
        regularExpression = "yyyy-mm-dd HH:mm:ss";
      }else if(type == "gender"){
        categoryType = "select";
        dataType = "string";
        regularExpression = "";
        conditions = ["남자", "여자"];
      }else if(type == "phone"){
        categoryType = "Random";
        dataType = "";
        regularExpression = "(01[01]{1})-([0-9]{4})-([0-9]{4})";
      }else if(type == "addr"){
        categoryType = "Repo";
        dataType = "2";
        regularExpression = "";
      }else if(type == "personNumber"){
        categoryType = "Random";
        dataType = "";
        regularExpression = "([0-9]{6})-([0-9]{7})";
      }


      var json = {fieldName:name, categoryType: categoryType, dataType: dataType, regularExpression : regularExpression, conditions: conditions };


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

  onSubmit(submitObj){

    this.form.value['fieldCategoryList'] = this.getFields();

    console.log('this.form.value ... ', this.form.value);
    console.log(JSON.stringify(this.form.value));

    submitObj = {
      "dataLength": 100,
      "exportType": "json",
      "fields": [{"fieldName": "", "fieldType": ""}],
      "fieldCategoryList": [{"fieldName": "233", "categoryType": "Repo","dataType":"1"}]
    };



    this.http.post('http://localhost:8080/search', submitObj).subscribe(data => {
      console.log(data);
      this.result = data;
    });


  }
}
