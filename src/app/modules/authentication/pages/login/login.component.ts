import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

// SERVICES
import { LoadingService } from '@services/loading/loading.service';
import { LoginService } from '@services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = ''

  constructor (
    private _formBuilder: FormBuilder,
    private _loadingService: LoadingService,
    private _loginService: LoginService
    ) {
      this.loginForm = this._formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      })
    }

  public onLoginSubmit(): void {
    this.loginError = ''
    this._loadingService.show()

    if (this.loginForm.valid && this.loginForm.dirty) {
      const { email, password } = this.loginForm.value

      setTimeout(() => {
        this.loginError = this._loginService.login(email, password)
        this._loadingService.hide()
      }, 2000)
    }
  }
}
