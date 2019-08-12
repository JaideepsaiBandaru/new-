import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Status } from '../model/Status';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: UsersService, public router: Router) { }

  ngOnInit() {
    
  }


  signOut() {
    this.authService.signOut()
      .subscribe((res: Status) => {
        console.log(res)
        if (res.queryStatus) {
          this.authService.loginStatus = false
          this.router.navigateByUrl('/signin')
        }
      })
  }
}