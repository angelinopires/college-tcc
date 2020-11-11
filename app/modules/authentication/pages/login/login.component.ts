import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { LoginService } from '@services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor (
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
    ) {
      this.loginForm = this._formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  onLoginSubmit(): void {
    if (this.loginForm.valid && this.loginForm.dirty) {
      const { email, password} = this.loginForm.value

      this._loginService.login(email, password)
    }
  }
}
