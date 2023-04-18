import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styles: []
})
export class RegistrationFormComponent {

  isRegistred: boolean = false;
  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.min(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.required, Validators.email])
  })





  get isAgeValid() {
    return this.validationForm.controls["age"].valid;
  }
  get isNameValid() {
    return this.validationForm.controls["name"].valid;
  }
  get isEmailValid() {
    return this.validationForm.controls["email"].valid;
  }

  add() {
    if (this.validationForm.valid) {
      this.isRegistred = true
    }
  }
}
