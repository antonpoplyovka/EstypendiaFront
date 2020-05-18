import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address/address-list.component';
import { StudentTypeComponent } from './student-type/student-type.component';
import { StudentsListComponent } from './students-list/students-list.component';


const routes: Routes = [
  {path: 'students-list', component: StudentsListComponent},
  {path: 'student-type', component: StudentTypeComponent},
  {path: 'address-list', component: AddressListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
