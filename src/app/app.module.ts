import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SetOptionComponentComponent } from './set-option-component/set-option-component.component';
import { FieldInputComponentComponent } from './field-input-component/field-input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SetOptionComponentComponent,
    AppComponent,
    FieldInputComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
