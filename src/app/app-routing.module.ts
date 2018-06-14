import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'myapp',
    canActivate: [AuthGuard],
    loadChildren: './my-app/my-app.module#MyAppModule'
  },
  {
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
