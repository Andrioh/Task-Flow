import { Component } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountcomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accountcomponent.component.html',
  styleUrl: './accountcomponent.component.css'
})
export class accountcomponent {
  connected: boolean = false;
  connectedsafe: boolean = false;
  currentphase: string = "register"
  connectfinished: boolean = false;

  username: string | undefined;
  password: string | undefined;

  constructor(private user: UserService, private route: Router) { };

  connectverify() {
    return this.connected
  }

  ViewPage() {
    if (this.connected == false && this.connectfinished == false) {
      this.connected = true
      this.currentphase = "login"
    } else {
      this.connected = false
      this.currentphase = "register"
    }
  }

  // Checks if the inputs are empty

  VerifyClick() {
    if (this.username && this.password && this.connectfinished == false) {
      console.log(this.username, this.password)

      if (this.currentphase == "register"){
        this.user.RegisterUser(this.username, this.password)
      }else if(this.currentphase == "login"){
        this.user.LoginUser(this.username, this.password)
      }
    }
  }

  UserConnectVerify(value: boolean){
    this.connectedsafe = value

    if (this.connectedsafe == true){
      this.connectfinished = true
    }
  }

  // Show or not the password

  eyeview = false

  eyepassword() {
    if (this.eyeview == true) {

      this.eyeview = false
    } else {

      this.eyeview = true
    }
  }

  eyeother() {
    return this.eyeview
  }

}
