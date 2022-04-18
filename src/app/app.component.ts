import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Profile } from './models/Profile';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(RegisterComponent) register;
  @ViewChild(LoginComponent) login;
  profile!: Profile;
  card = 0;
  receiveCard($event) {
    this.card = $event
  }
  receiveProfile($event) {
    this.profile = $event
  }
}