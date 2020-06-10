import {Component, OnInit} from '@angular/core';
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
  searchText: string;
  report: AdminReport[];
  showingReport: AdminReport[] = [];
  studentReport: StudentReport[];
  studentsReport: Student[];
  addressReport: Address[];
  reportReady = false;
  pdfAddress: string;

  constructor(private httpPosts: HttpService) {
  }

  ngOnInit(): void {
    this.getReport();

  }

  getReport() {
    this.httpPosts.getReport().subscribe(adminReportDTORecords => {
      this.report = adminReportDTORecords;
      this.showingReport = this.report;
    });

  }

  getPdfReport() {
    this.httpPosts.getPDFAdminReport().subscribe(adminReportPdf => {
      this.pdfAddress = adminReportPdf.link;
      this.reportReady = true;

      // window.open(this.pdfAddress, '_blank');
    });
  }
  searchRecord() {
    if (this.searchText.length.valueOf() !== 0) {
      this.showingReport = [];
      this.report.map(record => {
        if (record.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || record.surname.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || record.monthlyPayment.toString().indexOf(this.searchText.toLowerCase()) !== -1)
          {
          this.showingReport.push(record);
        }
      });
    } else {
      this.showingReport = this.report;
    }
  }


}
