import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { AccountComponent } from '../../Component/accountcomponent/accountcomponent.component';
import { MyTaskComponent } from "../../Component/my-task/my-task.component";
import { NewTaskComponent } from "../../Component/new-task/new-task.component";
import { IndexComponent } from "../index/index.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent, AccountComponent, MyTaskComponent, NewTaskComponent, IndexComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class accountcomponent {

}
