import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsListComponent } from './students-list/students-list.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressListComponent } from './address/address-list.component';
import { StudentTypeComponent } from './student-type/student-type.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StudentsListComponent,
    AddressListComponent,
    StudentTypeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
