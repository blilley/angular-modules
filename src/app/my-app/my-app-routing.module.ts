import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAppComponent } from './my-app.component';
import { HomeComponent } from './home/home.component';
import { AnotherComponent } from './another/another.component';

const routes: Routes = [
  {
    path: '',
    component: MyAppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'another',
        component: AnotherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAppRoutingModule { }
