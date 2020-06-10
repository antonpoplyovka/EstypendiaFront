import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsListComponent } from './students-list/students-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressListComponent } from './address/address-list.component';
import { StudentTypeComponent } from './student-type/student-type.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { StudentReportComponent } from './student-report/student-report.component';
// import { TypeOfHousingComponent } from './type-of-housing/type-of-housing.component';
import { AutomaticStudentReportComponent } from './automatic-student-report/automatic-student-report.component';
import { GoogleUsersComponent } from './google-users/google-users.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StudentsListComponent,
    AddressListComponent,
    StudentTypeComponent,
    AdminReportComponent,
    StudentReportComponent,
    // TypeOfHousingComponent,
    AutomaticStudentReportComponent,
    GoogleUsersComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
