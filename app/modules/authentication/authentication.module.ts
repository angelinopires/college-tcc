import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { LoginComponent } from './pages/login/login.component';

// MODULES
import { AuthenticationRoutingModule } from './authentication-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '@material-ui/material-ui.module';

// SERVICE
import { LoginService } from '@services/login/login.service';
import { StorageService } from '@services/storage/storage.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    FormsModule,
    MaterialUiModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    LoginService,
    StorageService
  ]
})
export class AuthenticationModule { }
