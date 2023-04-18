import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentService } from "src/app/Services/student.service";

@Component({
  selector: "app-update-student",
  templateUrl: "./update-student.component.html",
  styles: [],
})
export class UpdateStudentComponent implements OnInit {
  student: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? 0;
    const students = this.studentService.getStudents();
    this.student = students[+id - 1];
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get("id") ?? 0;
    this.studentService.updateStudent(+id - 1, this.student);
    this.router.navigate(["/students"]);
  }
}
