import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../Service/page.service';

@Component({
  selector: 'app-my-task',
  standalone: true,
  imports: [],
  templateUrl: './my-task.component.html',
  styleUrl: './my-task.component.css'
})
export class MyTaskComponent implements OnInit {

  constructor(private route:Router, private page:PageService){}

  ngOnInit(): void {
    const value = this.page.GetPage()

    if (value == false) {
      this.route.navigate([''])
    }
  }

  backpage(){
    this.route.navigate(["/home"])
  }
  
  newtaskpage(){
    this.route.navigate(["/New+Task"])
  }

}
