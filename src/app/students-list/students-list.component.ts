import {Component, OnInit} from '@angular/core';
import {Student} from '../interfaces/student';
import {HttpService} from '../services/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StudentType} from '../interfaces/student-type';
import {AddressType} from '../interfaces/address-type';
import {Address} from '../interfaces/address';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentsList: Student[];
  studentTypeList: StudentType[];
  addressTypeList: AddressType[];
  allAddresses: Address[];
  edit = false;
  student = new Student('', '', '', '', '', '', '', '', 0, 0, 0, 0);

  error: string;
  typeOfStudentSelect: StudentType;

  constructor(private httpService: HttpService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.initEmptyStudent();
    this.getStudentsReport();
    this.getStudentsReport();
    this.getStudentTypeList();
    this.getAddressTypeList();
    this.getAllAddresses();
  }


  getStudentsReport() {
    this.httpService.getStudentsList().subscribe(studentController => {
      this.studentsList = studentController;
    });
  }

  getStudentTypeList() {
    this.httpService.getStudentTypes().subscribe(data => {
      this.studentTypeList = data;
    });
  }

  getAddressTypeList() {

    this.httpService.getAddressType().subscribe(data => {
      this.addressTypeList = data;
    });
  }

  getAllAddresses() {

    this.httpService.getAllAddresses().subscribe(data => {
      this.allAddresses = data;
    });
  }

  addNewStudent() {
    this.httpService.createNewStudent(this.student).subscribe(
      data => {
        this.clearAllAndRefreshData();
      },
      error => {
        this.error = error;
      });
  }

  editStudent() {

    this.httpService.editStudent(this.student).subscribe(
      data => {
        this.clearAllAndRefreshData();
      },
      error => {
        this.error = error;
      });
  }

  prepareEditStudent(student: Student) {
    this.student = student;
    this.edit = true;
  }

  studentEntityReadyToSend() {
    return this.student.name.length > 0 && this.student.surname.length > 0 && this.student.surname.length > 0
      && this.student.fatherName.length > 0

      && this.student.placeOfBirth.length > 0 && this.student.countryOfBirth.length > 0 && this.student.nationality.length > 0
      && this.student.nationalityOfBirth.length > 0 && this.student.addressOfResidence !== 0 && this.student.actualAddress !== 0
      && this.student.addressType !== 0 && this.student.typeOfStudent !== 0;
  }

  initEmptyStudent() {
    this.student.name = '';
    this.student.surname = '';
    this.student.fatherName = '';
    this.student.email = '';
    this.student.placeOfBirth = '';
    this.student.countryOfBirth = '';
    this.student.nationality = '';
    this.student.nationalityOfBirth = '';
    this.student.addressOfResidence = 0;
    this.student.actualAddress = 0;
    this.student.addressType = 0;
    this.student.typeOfStudent = 0;
  }

  printStudent() {
  }

  clearAllAndRefreshData() {
    this.student = new Student('', '', '', '', '', '', '', '', 0, 0, 0, 0);

    this.edit = false;
    this.loadData();
  }
}


