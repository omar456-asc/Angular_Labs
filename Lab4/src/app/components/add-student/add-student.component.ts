import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StudentService } from "src/app/Services/student.service";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent {
  name: string = "";
  age: number = 0;
  email: string = "";
  constructor(
    private http: HttpClient,
    private studentService: StudentService
  ) {}

  onSubmit() {
    const newStudent = { name: this.name, age: this.age, email: this.email };
    this.studentService.addStudent(newStudent).subscribe((response) => {
      console.log(response);
      this.name = "";
      this.age = 0;
      this.email = "";
      // update the students array in the StudentsTableComponent
      this.studentService.updateStudents(
        newStudent.name,
        newStudent.age,
        newStudent.email
      );
    });
    alert("added successfully");
  }
}
