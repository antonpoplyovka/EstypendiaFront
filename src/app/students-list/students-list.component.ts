import { Component, OnInit } from '@angular/core';
import {Student} from '../interfaces/student';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentsList: Student[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getStudentsReport();
  }

  getStudentsReport() {
    this.httpService.getStudentsList().subscribe(studentController => {
      this.studentsList = studentController;
      console.log(this.studentsList);
    });
  }
}
