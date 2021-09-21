import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>("https://localhost:44382/Employees/GetEmployees")
  }
}
