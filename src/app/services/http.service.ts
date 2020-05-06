import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport} from '../interfaces/studentReport';
import {Students} from '../interfaces/students';
import {Address} from '../interfaces/address';
import {PaymentsLog} from '../interfaces/paymentsLog';
import {TypeOfHousing} from '../interfaces/typeOfHousing';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {  }

  public getReport(): Observable<Array<AdminReport>> {
    return this.http.get<Array<AdminReport>>('http://localhost:8081/api/v1/report/admin');
  }

  public getStudentReport(): Observable<Array<StudentReport>> {
    return this.http.get<Array<StudentReport>>('http://localhost:8081/api/v1/report/student/');
  }

  public getStudentsReport(): Observable<Array<Students>> {
    return this.http.get<Array<Students>>('http://localhost:8081/api/v1/students');
  }

  public getAddressReport(): Observable<Array<Address>> {
    return this.http.get<Array<Address>>('http://localhost:8081/api/v1/address/');
  }

  public getPaymentsLogReport(): Observable<Array<PaymentsLog>> {
    return this.http.get<Array<PaymentsLog>>('http://localhost:8081/api/v1/paymentsLog/');
  }

  public getTypeOfHousingReport(): Observable<Array<TypeOfHousing>> {
    return this.http.get<Array<TypeOfHousing>>('http://localhost:8081/api/v1/typeOfHousing/');
  }

}
