import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexcomponent',
  standalone: true,
  imports: [],
  templateUrl: './indexcomponent.component.html',
  styleUrl: './indexcomponent.component.css'
})
export class IndexcomponentComponent implements OnInit {

  connected: boolean = false

  constructor(private user:UserService, private route:Router){};

  ngOnInit(): void {
    this.connected = this.user.GetConnectSuccess()

  if (this.connected == false){
    this.route.navigate([''])
  }
  }

}
