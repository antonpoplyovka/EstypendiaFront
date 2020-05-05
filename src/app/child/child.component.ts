import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {AdminReport} from '../interfaces/adminReport';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  report: AdminReport[];
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
