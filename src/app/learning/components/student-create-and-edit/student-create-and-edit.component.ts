import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Student} from "../../model/student.entity";

@Component({
  selector: 'app-student-create-and-edit',
  templateUrl: './student-create-and-edit.component.html',
  styleUrl: './student-create-and-edit.component.css'
})
export class StudentCreateAndEditComponent {
  // Attributes
  @Input() student: Student;
  @Input() editMode = false;
  @Output() studentAdded = new EventEmitter<Student>();
  @Output() studentUpdated = new EventEmitter<Student>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('studentForm', {static: false}) studentForm!: NgForm;

  // Methods
  constructor() {
    this.student = {} as Student;
  }

  // Private methods
  private resetEditState() {
    this.student = {} as Student;
    this.editMode = false;
    this.studentForm.resetForm();
  }

  // Event Handlers

  onSubmit() {
    if (this.studentForm.form.valid) {
      let emitter = this.editMode ? this.studentUpdated : this.studentAdded;
      emitter.emit(this.student);
      this.resetEditState();
    } else {
      console.error('Invalid data in form');
    }
  }

  onCancel() {
    this.editCanceled.emit();
    this.resetEditState();
  }
}
