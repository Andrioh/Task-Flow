import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../Service/page.service';
import { TaskService } from '../../Service/task.service'; 
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-my-task',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './my-task.component.html',
  styleUrl: './my-task.component.css'
})
export class MyTaskComponent implements OnInit {

  constructor(private task:TaskService, private route:Router, private page:PageService){}

  divarray: any[] = []
  detail: boolean = false
  divcolor = "#2400FF"
  idselected = ""


  ngOnInit(): void {
    const value = this.page.GetPage()

    if (value == false) {
      this.route.navigate([''])
    }

    this.divarray = this.task.GetArray()
  }

  backpage(){
    this.route.navigate(["/Home"])
  }
  
  newtaskpage(){
    this.route.navigate(["/New+Task"])
  }

  viewtaskdetail(id: string){
    this.idselected = id
    if (this.detail == false){
      this.detail = true
      this.divcolor = "#0A004A"
    }else{
      this.detail = false
      this.divcolor = "#2400FF"
    }
  }

  clickdelete(){
    this.task.DeleteTask(this.idselected)
  }

  clickdone(){
    this.task.DoneTask(this.idselected)
  }

}
