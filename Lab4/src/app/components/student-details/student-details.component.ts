import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent {
  students = [
    { name: "", age: 23, email: "", phone: '', address: '' },

    { name: "Mahmoud", age: 23, email: "mahmoud@gmail.com", phone: '01091619325', address: 'Alexandria, Egypt' },
    { name: "Omar", age: 24, email: "omar@gmail.com", phone: '01204884457', address: 'Cairo, Egypt' },
    { name: "Khaled", age: 25, email: "Khaled@gmail.com", phone: '0151454646', address: 'Giza, Egypt' },
    { name: "Mohamed", age: 26, email: "mohamed@gmail.com", phone: '02154861', address: 'Alexandria, Egypt' },
    { name: "Ahmed", age: 27, email: "ahmed@gmail.com", phone: '0116546', address: 'Cairo, Egypt' },
    { name: "mostafa", age: 28, email: "mostafa@gmail.com", phone: '02156545', address: 'Giza, Egypt' }
  ]
  selectedUser: any;
  id = 0
  constructor(route: ActivatedRoute) {
    this.id = +route.snapshot.params["id"];
    this.selectedUser = this.students[this.id]
    console.log(this.selectedUser);
  }
}
