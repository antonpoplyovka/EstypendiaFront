import { Component, OnInit } from '@angular/core';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport} from '../interfaces/studentReport';
import {Student} from '../interfaces/student';
import {Address} from '../interfaces/address';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  report: AdminReport[];
  studentReport: StudentReport[];
  studentsReport: Student[];
  addressReport: Address[];

  constructor(private httpPosts: HttpService) { }

  ngOnInit(): void {
    this.getReport();

  }

  getReport() {
    this.httpPosts.getReport().subscribe(adminReportDTORecords => {
      this.report = adminReportDTORecords;
      console.log(this.report);
    });

  }




}
