import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport} from '../interfaces/studentReport';

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

}
