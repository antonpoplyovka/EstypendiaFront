import {Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport } from '../interfaces/studentReport';
import {Student} from '../interfaces/student';
import {Address} from '../interfaces/address';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  report: AdminReport[];
  studentReport: StudentReport[];
  studentsReport: Student[];
  addressReport: Address[];

  constructor(private httpPosts: HttpService) { }

  ngOnInit(): void {
    this.getReport();
    this.getStudentReport();
    this.getStudentsReport();
    this.getAddressReport();
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
    this.httpPosts.getStudentsList().subscribe(studentController => {
      this.studentsReport = studentController;
      console.log(this.studentsReport);
    });
  }

  getAddressReport() {
    this.httpPosts.getAllAddresses().subscribe(addressController => {
      this.addressReport = addressController;
      console.log(this.addressReport);
    });
  }

}
