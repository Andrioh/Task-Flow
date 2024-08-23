import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { accountcomponent } from '../../Component/accountcomponent/accountcomponent.component'; 

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent, accountcomponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
