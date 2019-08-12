import { Component, OnInit } from '@angular/core';
import { Users } from './../model/Users';
import { UsersService } from '../users.service';
import { Status } from '../model/Status';
import { Router } from '@angular/router';
import { UserStatus } from '../model/UserStatus';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  successFlag: boolean
  errorFlag: boolean
  newUsers: Users;
result:any
  constructor(public authService: UsersService, public router: Router) {
    this.initUsers()
    
  }

  ngOnInit() {
  }

  loginUsers(addForm) {
    this.successFlag = false
    this.errorFlag = false
    this.authService.loginUsers(this.newUsers)
      .subscribe((data:UserStatus) => {
        console.log(data)

        if (data.querystatus) {
          
          this.successFlag = true
          this.authService.loginStatus = true
          this.authService.currentUser = data
          addForm.form.markAsPristine()
          this.router.navigateByUrl('/')
        }

        else {
          this.errorFlag = true
          this.authService.loginStatus = false
          addForm.form.markAsPristine()
        }

      }, err => {
        console.log(err)
        this.errorFlag = true
        this.authService.loginStatus = false
      })
  }

  initUsers() {
    this.newUsers = {
      id: 0,
      username: '',
      password: '',
      lastName: '',
      firstName: '',
      mnumber: ''
    }
  }
}
