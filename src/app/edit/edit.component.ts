import { PostsService } from './../posts.service';
import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../model/Posts';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  editedPost: Posts

  @Input()
  index: number

  successFlag: boolean

  constructor(public service: PostsService) {
    this.successFlag = false
  }

  ngOnInit() {

  }

  editPost(editForm) {

    var obj: Posts = new Posts()

    obj.pid = this.editedPost.pid
    obj.title = editForm.form.value.title
    obj.body = editForm.form.value.body

    this.service.editPost(obj)
      .subscribe((data: Posts) => {
        console.log(data)
        this.service.posts[this.index].pid = obj.pid
        this.service.posts[this.index].title = obj.title
        this.service.posts[this.index].body = obj.body
        editForm.form.markAsPristine()
        this.successFlag = true
      })
  }

}