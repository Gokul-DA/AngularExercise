import { Component } from '@angular/core';
import { Jobseeker } from './jobseeker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css'],
})
export class JobseekersComponent {
  jobSeeker: Jobseeker;
  constructor() {
    this.jobSeeker = new Jobseeker();
  }

  submit(f: NgForm): void {
    console.log(f.value);
    console.log(this.jobSeeker);
  }
}
