import { Injectable } from '@angular/core';

interface User {
  id: number,
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  connected: boolean | undefined;
  connectedsuccess = false;
  registersuccess: boolean | undefined;
  usernameglobal: string | undefined;
  username: string | undefined

  private user: User[] = [];

  UpdateAuto() {
    const userdata = localStorage.getItem("User")
    this.user = userdata ? JSON.parse(userdata) : []
  }

  HasName(name: string){
    this.username = name
  }

  GetConnect() {
    return this.connected
  }

  GetName(){
    return this.username
  }

  GetRegister(){
    return this.registersuccess
  }

  GetConnectSuccess(){
    return this.connectedsuccess
  }

  FinishRegister(){
    this.registersuccess = false
  }

  FinishConnect() {
    this.connectedsuccess = true
    this.connected = false
  }

  RegisterUser(username: string, password: string) {
    this.UpdateAuto()

    if (Array.isArray(this.user)) {
      const usernamefound = this.user.find((user: User) => user.username === username)
      
      if (usernamefound) {
        return console.log('[ERROR] this user already has an account')
      } else {
        if (this.user.length > 0) {
          this.usernameglobal = username
          this.connected = true
          const lastid = this.user[this.user.length - 1].id
          let uservalue = { id: lastid, username: username, password: password }
          this.user.push(uservalue)
          localStorage.setItem("User", JSON.stringify(this.user))
          console.log("[SUCCESS] User register")
          this.registersuccess = true
        } else {
          this.usernameglobal = username
          this.connected = true
          let uservalue = { id: 1, username: username, password: password }
          this.user.push(uservalue)
          localStorage.setItem("User", JSON.stringify(this.user))
          console.log("[SUCCESS] User register")
          this.registersuccess = true
        }
      }
    }

  }

  LoginUser(username: string, password: string) {
    if (Array.isArray(this.user)) {
      this.UpdateAuto()
      const usernamefound = this.user.find((user: User) => user.username == username)
      
      if (usernamefound && usernamefound.password === password) {
        this.usernameglobal = usernamefound.username
        this.connected = true
        console.log("[SUCESS] User login")
        return this.GetConnect()
      } else {
        return console.log("[ERRO] User not found")
      }
    }
  }

}
