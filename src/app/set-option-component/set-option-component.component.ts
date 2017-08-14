import {Component, forwardRef, Input, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {FieldInputWrapperComponent} from "../field-input-wrapper-component/field-input-wrapper.component";

@Component({
  selector: 'app-set-option-component',
  templateUrl: './set-option-component.component.html',
  styleUrls: ['./set-option-component.component.css']
})
export class SetOptionComponentComponent implements OnInit {
  form: FormGroup;
  categoryTypes = ['json', 'xml', 'sql'];



  constructor(private http: HttpClient,
              private fb: FormBuilder) {
    /*
    this.http.get('http://localhost:8080/category_type').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
*/
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      rowNum: 100,
      categoryType: '',
      fields: this.fb.array([{fieldName: '', fieldType: ''}])
    });
  }

  ngOnInit() {

  }

  submitData() {

    console.log(this);

  }

  onSubmit(event){
    console.log('this.form.value ... ', this.form.value.rowNum, this.form.value.categoryTypes);
    console.log('this.form.get ... ', this.form.get('rowNum').value, this.form.get('categoryTypes').value);
  }

}
