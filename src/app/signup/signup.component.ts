import { Component, OnInit } from '@angular/core';
import { Users } from '../model/Users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { UserStatus } from '../model/UserStatus';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Users
  successFlag: boolean
  errorFlag: boolean
  constructor(public authService: UsersService, public router: Router) {
    this.initUser()
  }

  ngOnInit() {
  }

  signUpSubmit(signUpForm) {

    this.successFlag = false
    this.errorFlag = false
    this.authService.signup(this.user)
      .subscribe((res: UserStatus)=> {
        console.log(res)
        if (res !== null) {
          this.successFlag = true
          this.authService.loginStatus =true
          this.authService.currentUser = res
          this.router.navigateByUrl('')
        }
        else {
          this.errorFlag = true
          this.authService.loginStatus = false
        }
      }, err => {
        console.log(err)
        this.errorFlag = true
        this.authService.loginStatus = false
      })
  }

  initUser() {
    this.user = {
      id: 0,
      username: '',
      password: '',
      lastName:'',
      firstName:'',
      mnumber:''
  }

}}