import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {AdminReport} from '../interfaces/adminReport';
import {StudentReport} from '../interfaces/studentReport';
import {Student} from '../interfaces/student';
import {Address} from '../interfaces/address';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {StudentType} from '../interfaces/student-type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {  }

  public getReport(): Observable<Array<AdminReport>> {
    return this.httpClient.get<Array<AdminReport>>(environment.adminReportURL);
  }

  public getStudentReport(): Observable<Array<StudentReport>> {
    return this.httpClient.get<Array<StudentReport>>(environment.studentReportURL);
  }

  public getStudentsList(): Observable<Array<Student>> {
    return this.httpClient.get<Array<Student>>(environment.studentURL);
  }

  public createNewStudent( student: Student): Observable<any> {
    return this.httpClient
      .post(environment.studentURL, student)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createNewAddress(address: Address): Observable<any>{
    return this.httpClient
      .post(environment.addressURL, address)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getAddressReport(): Observable<Array<Address>> {
    return this.httpClient.get<Array<Address>>(environment.addressURL);
  }
  public getStudentTypes(): Observable<Array<StudentType>> {
    return this.httpClient.get<Array<StudentType>>(environment.studentTypeURL);
  }



  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `${error.error[0].message}`;
    }
    return throwError(errorMessage);
  }
}
