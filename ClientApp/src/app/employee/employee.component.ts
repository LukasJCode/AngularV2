import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employee: IEmployee;
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    let empCode: string = this.activatedRoute.snapshot.params['code'];
    this.employeeService.getEmployee(empCode).subscribe((employeeData) => {
      if (employeeData == null) {
        this.statusMessage = 'Employee with given code does not exist';
      }
      else {
        this.employee = employeeData
      }
    }, (error) => {
        this.statusMessage = 'Problem with a service. Please try again later';
        console.log(error);
      });
    }
}
