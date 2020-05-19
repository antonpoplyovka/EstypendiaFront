import {Component, OnInit} from '@angular/core';
import {Student} from '../interfaces/student';
import {HttpService} from '../services/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StudentType} from '../interfaces/student-type';

@Component({
  selector: 'app-student-type',
  templateUrl: './student-type.component.html',
  styleUrls: ['./student-type.component.css']
})
export class StudentTypeComponent implements OnInit {

  studentTypeList: StudentType[];
  studentType = new StudentType();
  error: string;

  constructor(private httpService: HttpService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.initEmptyStudentType();
    this.getStudentTypes();
    this.getStudentTypeList();
  }

  addNewStudentType() {
    this.httpService.createNewStudentType(this.studentType).subscribe(
      data => {
      },
      error => {
        this.error = error;
      });
  }

  getStudentTypes() {
    this.httpService.getStudentTypes().subscribe(studentTypeController => {
      this.studentTypeList = studentTypeController;
      console.log(this.studentTypeList);
    });
  }

  getStudentTypeList() {
    this.httpService.getStudentTypes().subscribe(data => {
      this.studentTypeList = data;
      console.log(data);
    });
  }

  studentTypeEntityReadyToSend() {
    return this.studentType.monthlyPayment > 0 &&
      this.studentType.description.length > 0;
  }

  initEmptyStudentType() {
    this.studentType.monthlyPayment = null;
    this.studentType.description = '';
  }

  printStudentType() {
    console.log(this.studentType);
  }
}
