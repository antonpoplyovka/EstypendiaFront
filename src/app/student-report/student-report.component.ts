import {Component, OnInit } from '@angular/core';
import {Student} from '../interfaces/student';
import {HttpService} from '../services/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StudentType} from '../interfaces/student-type';
import {StudentReport} from '../interfaces/studentReport';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {

  studentReport = new StudentReport(0, Date);
  studentsList: Student[];
  studentTypeList: StudentType[];
  error: string;
  typeOfStudentSelect: StudentType;

  constructor(private httpService: HttpService,  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initEmptyStudentReport();
    this.getStudentReport();
    this.getStudentTypeList();
  }

  getStudentReport() {
    this.httpService.getStudentReport().subscribe(studentReportController => {
      this.studentReport = studentReportController;
      console.log(this.studentReport);
    });
  }
  getStudentTypeList(){
    this.httpService.getStudentTypes().subscribe(data => {
      this.studentTypeList = data;
      console.log(data);
    });
  }
  addNewStudentType() {
    this.httpService.createNewStudentType(this.studentReport).subscribe(
      data => {
      },
      error => {
        this.error = error;
      });
  }
  studentReportEntityReadyToSend(){
  return this.studentReport.paymentAmount !== 0 &&
    this.studentReport.description.length !== Date;
  }

  initEmptyStudentReport(){
    this.studentReport.paymentAmount = 0 ;
    this.studentReport.paymentDate = Date ;
  }

  printStudentType(){
    console.log(this.studentReport);
  }
}
