import { AuthService } from './../providers/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentialsForm: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLoggedin() {
    this.authService.login(this.credentialsForm.value)
    .subscribe();
  }

}
