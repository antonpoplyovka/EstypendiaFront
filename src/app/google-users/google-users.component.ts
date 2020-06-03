import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {StudentType} from '../interfaces/student-type';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-google-users',
  templateUrl: './google-users.component.html',
  styleUrls: ['./google-users.component.css']
})
export class GoogleUsersComponent implements OnInit {
  googleUsersList: User[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAllGoogleUsers();
  }
  getAllGoogleUsers() {
    this.httpService.getAllUsers().subscribe(googleUsers => {
      this.googleUsersList = googleUsers;
    });
  }
}
