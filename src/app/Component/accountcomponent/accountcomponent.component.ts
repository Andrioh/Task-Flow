import { Component } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageService } from '../../Service/page.service';

async function time() {
  await new Promise(r => setTimeout(r, 2000));
}

@Component({
  selector: 'app-accountcomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accountcomponent.component.html',
  styleUrls: ['./accountcomponent.component.css']
})

export class AccountComponent {

  connected: boolean = false;
  connectedsafe: boolean = false;
  currentphase: string = "register"
  connectfinished: boolean = false;
  MessageActual: string = ""

  username: string | undefined;
  password: string | undefined;

  constructor(private page: PageService, private user: UserService, private route: Router) { };

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

  async VerifyClick() {
    if (this.username && this.password && this.connectfinished == false) {
      if (this.currentphase == "register") {

        const registervalue = this.user.GetRegister()
        if (registervalue == true) {
          this.MessageActual = "User register"
          this.user.FinishRegister()
          await time()
          this.MessageActual = ""

          this.password = ""
          this.currentphase = "login"
          this.ViewPage()
        }else{
          this.MessageActual = "[ERRO]: This username already exists"
          await time()
          this.MessageActual = ""
        }

      } else if (this.currentphase == "login") {
        this.user.LoginUser(this.username, this.password)
        this.connectfinished = this.user.GetConnect() || false

        if (this.connectfinished == true ) {
          this.MessageActual = "[Success] User found"
          this.page.AlterPage(true)
          await time()
          this.route.navigate(['/Home'])
          this.user.FinishRegister()
          this.user.FinishConnect()
          await time()
          this.MessageActual = ""
        } else {
          this.MessageActual = "[ERRO] User not found"
          await time()
          this.MessageActual = ""
        }


      }
    }
  }

  UserConnectVerify(value: boolean) {
    this.connectedsafe = value

    if (this.connectedsafe == true) {
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
