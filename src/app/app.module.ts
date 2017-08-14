import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldInputComponentComponent } from './field-input-component/field-input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldInputComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
