import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../Service/task.service';
import { PageService } from '../../Service/page.service';

async function time() {
  await new Promise(r => setInterval(r, 2000));
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent implements OnInit {

  ngmodelnewtask: string = "";

  constructor(private page:PageService, private task:TaskService, private route:Router){}

  ngOnInit(): void {
    const value = this.page.GetPage()

    if (value == false) {
      this.route.navigate([''])
    }
  }

  backpage(){
    this.route.navigate(["/home"])
  }

  async newtaskclick(){
    if (this.ngmodelnewtask != ""){
      this.task.newtask(this.ngmodelnewtask)
      this.ngmodelnewtask = ""
      await time()
      this.route.navigate(["/home"])
    }
  }


}
