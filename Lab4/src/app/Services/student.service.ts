import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private apiUrl =
    "https://my-json-server.typicode.com/omar456-asc/Angular_Labs/users";
  students: any[] = [
    { name: "Khaled", age: 25, email: "Khaled@gmail.com" },
    { name: "Mohamed", age: 26, email: "mohamed@gmail.com" },
    { name: "Ahmed", age: 27, email: "ahmed@gmail.com" },
    { name: "mostafa", age: 28, email: "mostafa@gmail.com" },
  ]; // initialize an empty array to hold students

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.students;
  }

  updateStudent(index: number, student: any) {
    this.students[index] = student;
  }

  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, student);
  }

  updateStudents(name: string, age: number, email: string): void {
    const newStudent = { name, age, email };
    this.http
      .post(
        "https://my-json-server.typicode.com/omar456-asc/Angular_Labs/users",
        newStudent
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.getStudents();
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
