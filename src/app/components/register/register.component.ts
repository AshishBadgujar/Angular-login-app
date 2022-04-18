import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  inputName: string = "";
  inputEmail: string = "";
  inputPassword: string = "";

  @Output() cardEvent = new EventEmitter<number>();
  @Output() profileEvent = new EventEmitter<Profile>();

  constructor() { }

  ngOnInit(): void {
  }
  register() {
    this.profileEvent.emit({
      name: this.inputName,
      email: this.inputEmail,
      password: this.inputPassword
    })
    this.cardEvent.emit(1)
  }
}
