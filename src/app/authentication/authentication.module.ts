import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent, LoginComponent],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
