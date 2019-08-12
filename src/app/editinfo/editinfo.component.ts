import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../model/Users';
import { Router, Event, NavigationEnd } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {
  @Input()
  editedInfo: Users

  @Input()
  index: number


  successFlag: boolean
  constructor(public router: Router, public authService: UsersService) {

    var sub = router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && !authService.loginStatus) {
        sub.unsubscribe()
        router.navigateByUrl('/signin')
        this.successFlag = false
      }
    })
  }

  ngOnInit() {
  }

  editInfo(editForm) {

    var obj: Users = {
      id: 0,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      mnumber: ''
    }

    obj.id = this.editedInfo.id
    obj.firstName = editForm.form.value.firstName
    obj.lastName = editForm.form.value.lastName
    obj.mnumber = editForm.form.value.mnumber

    obj.username = this.authService.currentUser.user.username

    obj.password = this.authService.currentUser.user.password

    this.authService.editInfo(obj)
      .subscribe((data: Users) => {
        console.log(data)
        this.authService.currentUser.user = data
        this.successFlag = true
        editForm.form.markAsPristine()
      })
  }

}
