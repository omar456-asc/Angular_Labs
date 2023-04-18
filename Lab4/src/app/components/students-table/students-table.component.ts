import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { StudentService } from "src/app/Services/student.service";

@Component({
  selector: "app-students-table",
  templateUrl: "./students-table.component.html",
  styles: [],
})
export class StudentsTableComponent implements OnInit {
  students: any[] = [
    { name: "Khaled", age: 25, email: "Khaled@gmail.com" },
    { name: "Mohamed", age: 26, email: "mohamed@gmail.com" },
    { name: "Ahmed", age: 27, email: "ahmed@gmail.com" },
    { name: "mostafa", age: 28, email: "mostafa@gmail.com" },
  ];
  constructor(private studentService: StudentService, private router: Router) {
    this.students = this.studentService.getStudents();
  }

  onUpdate(id: number) {
    this.router.navigate(["/student", id + 1]);
  }
  ngOnInit(): void {
    this.studentService.getStudents();
  }
}
