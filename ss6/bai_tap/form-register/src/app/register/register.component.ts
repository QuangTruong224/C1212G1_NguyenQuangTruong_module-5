import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      gmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      gender: new FormControl('', [Validators.required])
    }, [this.customPassword]);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  customPassword(confirm: AbstractControl) {
    const password = confirm.get('password').value;
    const confirmPassword = confirm.get('confirmPassword').value;
    return confirmPassword !== password ? confirmPassword : null;
  }
}
