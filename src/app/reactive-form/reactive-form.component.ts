import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  profileForm!: FormGroup;
  //router!: Router;
  private readonly id_pattern = RegExp(/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([5-9]\d\+|\d\d-|[01]\dA)\d{3}[\dA-Z]$/);
  private readonly passwosr_pattern = RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/)

  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {

    this.profileForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z- ]*")]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z- ]*")]],
      id: ['', [Validators.required, Validators.pattern(this.id_pattern)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.passwosr_pattern)]],
      password2: ['', [Validators.required]],
      checkbox: [false, [Validators.requiredTrue]]
    },
    );

  }
  get getControl() {
    return this.profileForm.controls;
  }

  onSubmit() {

    console.log(this.profileForm.value);
    this.updateProfile();
    this.profileForm.markAsPristine();
    this.profileForm.markAsUntouched();
    this.router.navigate(['calculator']);
  }


  updateProfile() {
    this.profileForm.patchValue({

      name: '',
      lastName: '',
      id: '',
      email: '',
      username: '',
      password: '',
      password2: '',
      checkbox: ''

    });
  }


  //constructor() { }

}
