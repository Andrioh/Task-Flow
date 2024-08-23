import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  connected: boolean | undefined;
  username: string | undefined;
  

  Verify(){
    const SaveUser = localStorage.getItem("User")
    if(SaveUser){
      return true
    }else{
      return false
    }
  }

  RegisterUser(username: string, password: string){
    
  }
  
  LoginUser(username: string, password: string){

  }

}
