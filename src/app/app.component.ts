import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { AccountComponent } from "./Component/account/account.component";
import { IndexComponent } from "./Page/index/index.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent, HeaderComponent, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-Flow';
}
