import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppRoutingModule } from './my-app-routing.module';
import { MyAppComponent } from './my-app.component';
import { HomeComponent } from './home/home.component';
import { AnotherComponent } from './another/another.component';

@NgModule({
  imports: [
    CommonModule,
    MyAppRoutingModule
  ],
  declarations: [MyAppComponent, HomeComponent, AnotherComponent],
  bootstrap: [MyAppComponent]
})
export class MyAppModule { }
