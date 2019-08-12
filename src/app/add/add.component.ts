import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from '../model/Posts';
import { UsersService } from '../users.service';
import { SigninComponent } from '../signin/signin.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newPost: Posts

  constructor(public service: PostsService,public ar: ActivatedRoute,public authService:UsersService) {
    this.newPost = new Posts()
}
ngOnInit() {
  this.newPost.ufk=this.authService.currentUser.user.id
}

  addPost(addForm) {
    this.service.addPost(this.newPost)
    .subscribe((data:Posts) => {
      this.service.posts.unshift(data)
      addForm.form.markAsPristine()
      console.log(data)
      this.newPost.title =''
      this.newPost.body=''

    })
  }

}

