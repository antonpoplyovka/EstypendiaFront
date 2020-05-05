import {Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport } from '../interfaces/studentReport';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  report: AdminReport[];
  studentReport: StudentReport[];
  constructor(private httpPosts: HttpService) { }

  ngOnInit(): void {
    this.getReport();
    this.getStudentReport();
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
      console.log(this.report);
    });

  }


}
