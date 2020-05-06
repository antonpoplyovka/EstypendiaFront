import {Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport } from '../interfaces/studentReport';
import {Students} from '../interfaces/students';
import {Address} from '../interfaces/address';
import {PaymentsLog} from '../interfaces/paymentsLog';
import {TypeOfHousing} from '../interfaces/typeOfHousing';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  report: AdminReport[];
  studentReport: StudentReport[];
  studentsReport: Students[];
  addressReport: Address[];
  paymentsLogReport: PaymentsLog[];
  typeOfHousingReport: TypeOfHousing[];

  constructor(private httpPosts: HttpService) { }

  ngOnInit(): void {
    this.getReport();
    this.getStudentReport();
    this.getStudentsReport();
    this.getAddressReport();
    this.getPaymentsLogReport();
    this.getTypeOfHousingReport();
  }

  getReport() {
    this.httpPosts.getReport().subscribe(adminReportDTORecords => {
      this.report = adminReportDTORecords;
      console.log(this.report);
    });

  }

  getStudentReport() {
    this.httpPosts.getStudentReport().subscribe(studentReportDTORecords => {
      this.studentReport = studentReportDTORecords;
      console.log(this.studentReport);
    });

  }

  getStudentsReport() {
    this.httpPosts.getStudentsReport().subscribe(studentController => {
      this.studentsReport = studentController;
      console.log(this.studentsReport);
    });
  }

  getAddressReport() {
    this.httpPosts.getAddressReport().subscribe(addressController => {
      this.addressReport = addressController;
      console.log(this.addressReport);
    });
  }

  getPaymentsLogReport(){
    this.httpPosts.getPaymentsLogReport().subscribe(paymentsLogController => {
      this.paymentsLogReport = paymentsLogController ;
      console.log(this.paymentsLogReport );
    });
  }

  getTypeOfHousingReport(){
    this.httpPosts.getTypeOfHousingReport().subscribe(typeOfHousingController => {
      this.typeOfHousingReport = typeOfHousingController ;
      console.log(this.typeOfHousingReport );
    });
  }

}
