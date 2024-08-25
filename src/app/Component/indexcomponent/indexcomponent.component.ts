import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';
import { PageService } from '../../Service/page.service';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../Service/task.service';

@Component({
  selector: 'app-indexcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indexcomponent.component.html',
  styleUrl: './indexcomponent.component.css'
})
export class IndexcomponentComponent implements OnInit {

  connected: boolean = false

  constructor(private task:TaskService, private page: PageService, private user: UserService, private route: Router) { };

  arraytask: any[] = [];

  ngOnInit(): void {
    const value = this.page.GetPage()

    if (value == false) {
      this.route.navigate([''])
    }

    this.arraytask = this.task.GetArray()
  }

  buttonnewtask() {
    this.route.navigate(["/New+Task"])
  }
  
  buttonmytask(){
    this.route.navigate(["/My+Task"])
  }

  TaskView(){
    this.route.navigate(["/My+Task"])
  }

}
