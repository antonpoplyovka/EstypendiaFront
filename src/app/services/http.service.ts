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
import {AddressType} from '../interfaces/address-type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {  }

  public getReport(): Observable<Array<AdminReport>> {
    return this.httpClient.get<Array<AdminReport>>(environment.adminReportURL);
  }

  public getStudentReport(studentId: number): Observable<Array<StudentReport>> {
    return this.httpClient.get<Array<StudentReport>>(environment.studentReportURL + studentId);
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
  public createNewStudentType( studentType: StudentType): Observable<any> {
    return this.httpClient
      .post(environment.studentTypeURL, studentType)
      .pipe(
        catchError(this.handleError)
      );
  }
  public createNewAddress( newAddress: Address): Observable<any> {
    return this.httpClient
      .post(environment.addressURL, newAddress)
      .pipe(
        catchError(this.handleError)
      );
  }
  public editAddress(editedAddress: Address): Observable<any>{
    return this.httpClient
      .put(environment.addressURL + editedAddress.id, editedAddress)
      .pipe(
        catchError(this.handleError)
      );
  }
  public editStudent(studentForEdit: Student): Observable<any>{
    return this.httpClient
      .put(environment.studentURL + studentForEdit.id, studentForEdit)
      .pipe(
        catchError(this.handleError)
      );
  }
  public getAllAddresses(): Observable<Array<Address>> {
    return this.httpClient.get<Array<Address>>(environment.addressURL);
  }
  public getStudentTypes(): Observable<Array<StudentType>> {
    return this.httpClient.get<Array<StudentType>>(environment.studentTypeURL);
  }
  public getAddressType(): Observable<Array<AddressType>> {
    return this.httpClient.get<Array<AddressType>>(environment.addressTypeURL);
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
