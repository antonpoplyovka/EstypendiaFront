import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {StudentReport} from '../interfaces/studentReport';

@Component({
  selector: 'app-automatic-student-report',
  templateUrl: './automatic-student-report.component.html',
  styleUrls: ['./automatic-student-report.component.css']
})
export class AutomaticStudentReportComponent implements OnInit {
  empty = true;
  studentReport: StudentReport[];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getStudentReport();
  }

  getStudentReport() {
    this.httpService.getAutomaticStudentReport().subscribe(studentTypeController => {
      this.studentReport = studentTypeController;
      if (this.studentReport.length === 0) {
        this.empty = true;
      } else {
        this.empty = false;
      }

    });
  }
}
