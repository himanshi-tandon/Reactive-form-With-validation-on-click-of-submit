import { Component } from '@angular/core';
import { FormGroup,  Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputvalidation';
  submitted = false;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  formGroupSample: FormGroup
  constructor(private fb: FormBuilder) {


  }
  ngOnInit() {
    // this.createFormControls();
    this.formGroupSample = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null,Validators.compose([Validators.required])],
      email: [null,Validators.compose([Validators.required])],
      password: [null,Validators.compose([Validators.required])],
      language: [null,Validators.compose([Validators.required])]
    });
  }



  createForm() {

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formGroupSample)
    console.log("Himanshi")

  }
}

