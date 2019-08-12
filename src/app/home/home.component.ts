import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router,Event, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public authService: UsersService) {
    var sub = router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && !authService.loginStatus) {
        sub.unsubscribe()
        router.navigateByUrl('/signin')
      }
    })
  }

  ngOnInit() {
  }

}