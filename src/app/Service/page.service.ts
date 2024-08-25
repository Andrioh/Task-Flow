import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private PageSecury: boolean = false

  UpdatePage(){
    const session = sessionStorage.getItem("PageSe")
    this.PageSecury = session ? true : false
  }

  GetPage(){
    return this.PageSecury
  }

  AlterPage(value: boolean){
    this.PageSecury = value
  }

  

}
