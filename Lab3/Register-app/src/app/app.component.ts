import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: { name: string; age: number }[] = [];
  title = 'Register-app';
  onStudentAdded(student: { name: string; age: number }) {
    this.students.push(student);
  }
}
