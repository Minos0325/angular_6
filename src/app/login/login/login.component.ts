import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = new FormGroup({
      // email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('')
    })
    // this.form = this.fb.group({
      
    // })
  }

  ngOnInit() {
  }
  onsubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(value, valid)
  }
}
