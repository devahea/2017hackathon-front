import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SetOptionComponentComponent } from './set-option-component/set-option-component.component';
import { FieldInputComponent } from './field-input-component/field-input.component';
import { FieldInputWrapperComponent } from './field-input-wrapper-component/field-input-wrapper.component';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ModalViewComponentComponent } from './modal-view-component/modal-view-component.component';



@NgModule({
  declarations: [
    AppComponent,
    SetOptionComponentComponent,
    FieldInputComponent,
    FieldInputWrapperComponent,
    ModalViewComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
