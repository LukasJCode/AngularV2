import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError, retryWhen, delay, take } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>("https://localhost:44382/Employees/GetEmployees")
      .pipe(retryWhen((error) => error.pipe(delay(1000), take(10))), catchError(this.handleError));
  }

  //Promise
  //getEmployee(code: string): Promise<IEmployee> {
  //  return this.http.get<IEmployee>("https://localhost:44382/Employees/GetEmployee/" + code)
  //    .pipe(retry(1), catchError(this.handleError)).toPromise()
  //}

  //Observable
  getEmployee(code: string): Observable<IEmployee> {
    return this.http.get<IEmployee>("https://localhost:44382/Employees/GetEmployee/" + code)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message);
  }
}
