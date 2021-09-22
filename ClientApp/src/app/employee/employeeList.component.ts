import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from './userPreferences';

@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
})

export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];

  selectedEmployeeCountRadioButton: string = 'All';
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private employeeService: EmployeeService, private userPreferencesService: UserPreferencesService) {
    
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData,
      (error) => {
        this.statusMessage = 'Problem with a service, try again later'
        console.error(error);
      });
    
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }

  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }

  get colour(): string {
    return this.userPreferencesService.colourPreference;
  }

  set colour(colour: string) {
    this.userPreferencesService.colourPreference = colour;
  }

}
