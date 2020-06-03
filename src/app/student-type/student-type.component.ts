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
  edit = false;
  error: string;

  constructor(private httpService: HttpService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.initEmptyStudentType();
    this.getStudentTypes();
    this.getStudentTypeList();
  }

  addNewStudentType() {
    this.httpService.createNewStudentType(this.studentType).subscribe(
      data => {
        this.clearAllAndRefreshData();
      },
      error => {
        this.error = error;
      });
  }
  editStudentType(){
    this.httpService.editStudentType(this.studentType).subscribe(
      data => {
        this.clearAllAndRefreshData();
      },
      error => {
        this.error = error;
      });
  }

  getStudentTypes() {
    this.httpService.getStudentTypes().subscribe(studentTypeController => {
      this.studentTypeList = studentTypeController;
    });
  }

  getStudentTypeList() {
    this.httpService.getStudentTypes().subscribe(data => {
      this.studentTypeList = data;
    });
  }
  prepareEditStudentType(studentType: StudentType){
    this.studentType = studentType;
    this.edit = true;
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
  }

  clearAllAndRefreshData() {
    this.studentType = new StudentType();
    this.edit = false;
    this.loadData();
  }
}
