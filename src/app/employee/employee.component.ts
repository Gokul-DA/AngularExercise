import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: Employee[];

  constructor() {
    this.employees = [
      new Employee(
        'E001',
        'Ravi',
        45000,
        new Date('1988-12-23'),
        'Training',
        'Trainer',
        5
      ),
      new Employee(
        'E002',
        'Ramesh Kumar',
        45000,
        new Date('2019-06-3'),
        'Training',
        'Trainer',
        4
      ),
      new Employee(
        'E003',
        'Ajay Varma',
        45000,
        new Date('2020-08-30'),
        'Testing',
        'Tester',
        4
      ),
      new Employee(
        'E004',
        'Gopi Krishna',
        25000,
        new Date('2021-10-11'),
        'Projects',
        'Programmer',
        3
      ),
    ];
  }
}
