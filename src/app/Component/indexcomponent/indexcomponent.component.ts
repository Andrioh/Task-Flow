import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';
import { PageService } from '../../Service/page.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indexcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indexcomponent.component.html',
  styleUrl: './indexcomponent.component.css'
})
export class IndexcomponentComponent implements OnInit {

  connected: boolean = false

  constructor(private page: PageService, private user: UserService, private route: Router) { };

  ngOnInit(): void {
    const value = this.page.GetPage()

    if (value == false) {
      this.route.navigate([''])
    }
  }

  buttonnewtask() {
    this.route.navigate(["/New+Task"])
  }
  
  buttonmytask(){
    this.route.navigate(["/My+Task"])
  }

}
