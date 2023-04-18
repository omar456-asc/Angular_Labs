import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegistrationFormComponent } from "./components/registration-form/registration-form.component";
import { StudentsTableComponent } from "./components/students-table/students-table.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentDetailsComponent } from "./components/student-details/student-details.component";
import { ErrorComponent } from "./components/error/error.component";
import { HttpClientModule } from "@angular/common/http";
import { StudentService } from "./Services/student.service";
import { AddStudentComponent } from "./components/add-student/add-student.component";
import { FormsModule } from "@angular/forms";
import { UpdateStudentComponent } from './components/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    RegistrationFormComponent,
    StudentsTableComponent,
    StudentDetailsComponent,
    ErrorComponent,
    AddStudentComponent,
    UpdateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
