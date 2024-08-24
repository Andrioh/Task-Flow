import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { AccountComponent } from '../../Component/accountcomponent/accountcomponent.component'; 

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent, AccountComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class accountcomponent {

}
