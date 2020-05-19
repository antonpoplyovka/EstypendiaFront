import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address/address-list.component';
import { StudentTypeComponent } from './student-type/student-type.component';
import { StudentsListComponent } from './students-list/students-list.component';
import {AdminReportComponent} from './admin-report/admin-report.component';
import {StudentReportComponent} from './student-report/student-report.component';


const routes: Routes = [
  {path: 'students-list', component: StudentsListComponent},
  {path: 'student-type', component: StudentTypeComponent},
  {path: 'admin-report', component: AdminReportComponent},
  {path: 'student-report', component: StudentReportComponent},
  {path: 'address-list', component: AddressListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
