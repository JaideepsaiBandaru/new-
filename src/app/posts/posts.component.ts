import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { PostsService } from '../posts.service';
import { Posts } from '../model/Posts';
import { UsersService } from '../users.service';
import { Status } from '../model/Status';
@Component({
  selector: 'app-posts',
  templateUrl: './Posts.component.html',
  styleUrls: ['./Posts.component.css']
})
export class PostsComponent implements OnInit {

  progressFlag: boolean
 
  constructor(public router: Router, public authService: UsersService, public postsService: PostsService) {
    var sub = router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && !authService.loginStatus) {
        sub.unsubscribe()
        router.navigateByUrl('/signin')
      }
    })
  }

  ngOnInit() {
    this.progressFlag = true
    this.postsService.getPosts().subscribe((data: Posts[]) => {
      console.log(data)
      this.postsService.posts = data
      this.progressFlag = false
    })
  }
    
  postCopy(post: Posts) {
    var obj: Posts = new Posts()
    obj.pid = post.pid
    obj.title = post.title
    obj.body = post.body

    return obj
  }
  
  delete(pid: number, i: number) {
    this.postsService.deletePost(pid)

      .subscribe((data: Status) => {
        console.log(data)
        if (data.queryStatus) {
          this.postsService.posts.splice(i, 1)
        }
      })
  }

}

