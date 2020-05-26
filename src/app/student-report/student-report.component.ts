import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {StudentReport} from '../interfaces/studentReport';
import { formatDate} from '@angular/common';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {
  studentId: number = null;
  empty = true;
  showAlert = false;
  studentReport: StudentReport[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  studentIdReady() {
    return this.studentId > 0;
  }

  getStudentReport() {
    this.studentReport = null;
    this.httpService.getStudentReport(this.studentId).subscribe(studentTypeController => {
      this.studentReport = studentTypeController;
      if (this.studentReport.length === 0) {
        this.empty = true;
        this.showAlert = true;
        console.log(this.studentReport.length);
      } else {
        this.empty = false;
        this.showAlert = false;
      }
      console.log(this.studentReport);

    });
  }




}
