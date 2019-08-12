import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { PostsService } from '../posts.service';
import { Comment } from '../model/Comment';
import { Posts } from '../model/Posts';
import { Status } from '../model/Status';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: Comment
  pid: number
  constructor(public router: Router, public authService: UsersService, public postsService: PostsService, public ar: ActivatedRoute) {

    var sub = router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && !authService.loginStatus) {
        sub.unsubscribe()
        router.navigateByUrl('/signin')
      }
    })

    this.pid = +(ar.snapshot.paramMap.get('pid'))
    this.comment = new Comment()
    this.comment.fk = this.pid

    postsService.getComments(this.pid)
      .subscribe((res: Comment[]) => {
        this.postsService.comments = res
      })
  }

  ngOnInit() {
  }

  addComment(addForm) {

    this.postsService.addComment(this.comment)
      .subscribe((data: Comment) => {
        this.postsService.comments.unshift(data)
        addForm.form.markAsPristine()
        this.comment.commentText=''
      })
  }
  deleteComment(commentId: number, i: number) {
    this.postsService.deleteComment(commentId)

      .subscribe((data: Status) => {
        console.log(data)
        if (data.queryStatus) {
          this.postsService.comments.splice(i, 1)
        }
      })
  }

}

