import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  template:  `
    <h2>The Main Part of the App</h2>
    <a routerLink="/">Home</a>
    <br/>
    <button (click)="logout()">Log out</button>
    <br/>
    <a routerLink="/another" >another</a>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class MyAppComponent { 
  constructor(private auth: AuthService){}

  logout(){
    this.auth.logout()
  }
}