import { Component } from '@angular/core';
import { HeaderComponent } from "../../Component/header/header.component";
import { IndexcomponentComponent } from "../../Component/indexcomponent/indexcomponent.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, IndexcomponentComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
