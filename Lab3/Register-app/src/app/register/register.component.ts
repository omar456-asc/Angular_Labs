import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  age: number = 0;
  errorMessage: string = '';
  @Output() studentAdded = new EventEmitter<{ name: string; age: number }>();
  addStudent() {
    if (this.name.length < 3) {
      this.errorMessage = 'Name must be at least 3 characters long';
      return;
    }

    if (this.age < 20 || this.age > 40) {
      this.errorMessage = 'Age must be between 20 and 40';
      return;
    }

    this.studentAdded.emit({ name: this.name, age: this.age });
    this.name = '';
    this.age = 0;
    this.errorMessage = '';
  }
}
