import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-set-option-component',
  templateUrl: './set-option-component.component.html',
  styleUrls: ['./set-option-component.component.css']
})
export class SetOptionComponentComponent implements OnInit {

  rowNum = 100;
  categoryTypes = ['json', 'xml', 'sql'];


  constructor(private http: HttpClient) {
    this.http.get('localhost:8080/category_type').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(JSON.stringify(data));
      this.categoryTypes = data['results'];
    });

  }

  ngOnInit()  {

  }

}
