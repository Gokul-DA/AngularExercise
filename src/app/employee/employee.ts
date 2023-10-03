export class Employee {
  empId: string;
  empName: string;
  salary: number;
  joinDate: Date;
  department: string;
  designation: string;
  grading: number;

  constructor(
    empId: string,
    empName: string,
    salary: number,
    joinDate: Date,
    department: string,
    designation: string,
    grading: number
  ) {
    this.empId = empId;
    this.empName = empName;
    this.salary = salary;
    this.joinDate = joinDate;
    this.department = department;
    this.designation = designation;
    this.grading = grading;
  }
}
