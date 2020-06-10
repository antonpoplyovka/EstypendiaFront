import {Component, OnInit} from '@angular/core';
import {Student} from '../interfaces/student';
import {HttpService} from '../services/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StudentType} from '../interfaces/student-type';
import {AddressType} from '../interfaces/address-type';
import {Address} from '../interfaces/address';
import {Country} from '../interfaces/country';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  searchText = '';
  countryList: Country [];
  showingStudentList: Array<Student> = [];
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
  printStudent(){
    console.log(this.student);
  }
  loadData() {

    this.initEmptyStudent();
    this.getStudentsReport();
    this.getStudentsReport();
    this.getStudentTypeList();
    this.getAddressTypeList();
    this.getAllAddresses();
    this.getCountries();
  }

  getCountries() {
    this.httpService.getCountries().subscribe(countryList => {
      this.countryList = countryList;
      console.log(this.countryList);

    });
  }

  getStudentsReport() {
    this.httpService.getStudentsList().subscribe(studentController => {
      this.studentsList = studentController;
      this.showingStudentList = this.studentsList;
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

  searchStudent() {
    if (this.searchText.length.valueOf() !== 0) {
      this.showingStudentList = [];
      this.studentsList.map(student => {
        if (student.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || student.surname.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || student.fatherName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || student.placeOfBirth.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || student.countryOfBirth.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || student.nationality.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || student.email.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) {
          this.showingStudentList.push(student);
        }
      });
    } else {
      this.showingStudentList = this.studentsList;
    }
  }

  clearAllAndRefreshData() {
    this.student = new Student('', '', '', '', '', '', '', '', 0, 0, 0, 0);

    this.edit = false;
    this.loadData();
  }
}


