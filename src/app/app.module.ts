import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SetOptionComponentComponent } from './set-option-component/set-option-component.component';
import { FieldInputComponentComponent } from './field-input-component/field-input-component.component';
import { FieldInputWrapperComponentComponent } from './field-input-wrapper-component/field-input-wrapper-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SetOptionComponentComponent,
    FieldInputComponentComponent,
    FieldInputWrapperComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
