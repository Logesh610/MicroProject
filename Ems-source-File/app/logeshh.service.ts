import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class LogeshhService {
  url : string;
  employee : Employee;
  employeeArr : Employee[];



  constructor( private http : HttpClient) {
    this.url="http://localhost:3004/employees";
     this.employee=new Employee();
     this.employeeArr = [];
   }
  insertEmployee(employee : Employee){
      this.insertEmployee
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Details Added";

  }
  updateEmployee(employee : Employee){
    this.insertEmployee
  this.http.put<Employee>(this.url+ "/" +employee.id,employee).subscribe();
  return "Employee Details Updated";

}
deleteEmployee(empId : number){
  this.insertEmployee
this.http.delete<Employee>(this.url+ "/" +empId).subscribe();
return "Employee Details Deleted";

}
findEmployee(empId : number){
this.http.get<Employee>(this.url+ "/" +empId).subscribe(data => this.employee= data);
return this.employee;

}
findAllEmployee(){
  this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr= data);
  return this.employeeArr;
  
  }
}
