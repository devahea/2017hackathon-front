import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SetOptionComponentComponent } from './set-option-component/set-option-component.component';
import { FieldInputComponent } from './field-input-component/field-input.component';
import { FieldInputWrapperComponent } from './field-input-wrapper-component/field-input-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    SetOptionComponentComponent,
    FieldInputComponent,
    FieldInputWrapperComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
