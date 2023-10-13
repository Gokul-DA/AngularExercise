import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  jobSeeker: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.jobSeeker = formBuilder.group({
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ]),
      ],
      // email: ['', Validators.compose([Validators.required, emailValidation])],
    });
  }

  addJobSeeker(): void {
    console.log(JSON.stringify(this.jobSeeker.value));
  }
}
export function emailValidation(
  control: AbstractControl
): ValidationErrors | null {
  if (!control.value) return null;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (control.value && !emailPattern.test(control.value)) {
    return { appEmailValidator: true };
  }

  return null;
}
