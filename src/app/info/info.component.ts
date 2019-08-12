import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../model/Users';
import { SigninComponent } from '../signin/signin.component';
import { UserStatus } from '../model/UserStatus';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

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


  
  userCopy(users: Users) {
    var obj: Users = {
      id: 0,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      mnumber: ''
    } 
    obj.id = users.id
    obj.firstName = users.firstName
    obj.lastName = users.lastName
    obj.mnumber=users.mnumber
    return obj
  }
}
  
