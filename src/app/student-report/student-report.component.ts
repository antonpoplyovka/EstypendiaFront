import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {StudentReport} from '../interfaces/studentReport';
import {formatDate} from '@angular/common';
import {Student} from '../interfaces/student';
import {AllStudentReport} from '../interfaces/all-student-report';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {
  studentId: number = null;
  showAllStudentReport = false;
  studentsList: Student[];
  allStudentReport: AllStudentReport[];
  empty = true;
  showAlert = false;
  studentReport: StudentReport[];
  pdfAddress: string;
  pdfReady = false;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getStudentsReport();
  }

  studentIdReady() {
    return this.studentId > 0;
  }

  getAllStudentReport() {
    this.httpService.getAllStudentReport().subscribe(allstudentReport => {
      this.allStudentReport = allstudentReport;
      this.showAllStudentReport = true;
      this.empty = true;

    });
  }

  getStudentReport() {
    this.studentReport = null;
    this.httpService.getStudentReport(this.studentId).subscribe(studentTypeController => {
      this.studentReport = studentTypeController;
      this.showAllStudentReport = false;
      if (this.studentReport.length === 0) {
        this.empty = true;
        this.showAlert = true;
      } else {
        this.empty = false;
        this.showAlert = false;
      }

    });
  }

  getPDFStudentReport() {
    this.httpService.getPDFStudentReport(this.studentId).subscribe(pdflink => {
      this.pdfAddress = pdflink.link;
      this.pdfReady = true;
    });
  }


  getStudentsReport() {
    this.httpService.getStudentsList().subscribe(studentController => {
      this.studentsList = studentController;
    });
  }

}
