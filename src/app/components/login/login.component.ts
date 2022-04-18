import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail: string = "";
  inputPassword: string = "";

  @Input() profile!: Profile;

  @Output() cardEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  login() {
    if (this.inputEmail == this.profile.email && this.inputPassword == this.profile.password) {
      this.cardEvent.emit(2)
    }
  }
}
