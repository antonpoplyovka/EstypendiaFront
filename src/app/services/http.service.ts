import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport} from '../interfaces/studentReport';
import {Students} from '../interfaces/students';
import {Address} from '../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {  }

  public getReport(): Observable<Array<AdminReport>> {
    return this.http.get<Array<AdminReport>>('http://localhost:8081/api/v1/report/admin');
  }

  public getStudentReport(): Observable<Array<StudentReport>> {
    return this.http.get<Array<StudentReport>>('http://localhost:8081/api/v1/report/student');
  }

  public getStudentsReport(): Observable<Array<Students>> {
    return this.http.get<Array<Students>>('http://localhost:8081/api/v1/students/');
  }
  public getAddressReport(): Observable<Array<Address>> {
    return this.http.get<Array<Address>>('http://localhost:8081/api/v1/address/');
  }
}
