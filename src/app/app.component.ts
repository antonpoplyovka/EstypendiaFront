import {Component, OnInit} from '@angular/core';
import {HttpService} from './services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EStypendia';
  userAuthenticated = null;
  adminUser = null;

  constructor(private httpService: HttpService) {
  }

  goToUrl(): void {
    window.location.href = 'http://localhost:8081/login';
  }


  ngOnInit(): void {
    console.log(this.userAuthenticated);
    this.isUserAuth();

  }

  logoutUser() {
    this.adminUser = null;
    this.userAuthenticated = null;
    window.location.href = 'http://localhost:8081/logout';

  }

  isAdmin() {
    this.httpService.isAdmin().subscribe(isAdmin => {
      console.log(isAdmin);
      if (isAdmin) {
        console.log('ADMIIIIIN');
        this.adminUser = true;
      }
      else {
        console.log('JustUser');
      }

    });
  }
  userUi(){
    console.log(this.userAuthenticated);
    console.log(this.adminUser);

    return this.userAuthenticated && !this.adminUser;
  }

  isUserAuth() {
    this.httpService.getUserInfo().subscribe(userInfo => {

      console.log(userInfo);
      if (userInfo) {
        this.isAdmin();
        this.userAuthenticated = true;
      }
      if (!this.userAuthenticated) {
        window.location.href = 'http://localhost:8081/login';
      }
      console.log(this.userAuthenticated);
    });
    this.isAdmin();

  }
}
