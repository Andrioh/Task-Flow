import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { accountcomponent } from "./Component/accountcomponent/accountcomponent.component";
import { IndexComponent } from "./Page/index/index.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, accountcomponent, HeaderComponent, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-Flow';
}
