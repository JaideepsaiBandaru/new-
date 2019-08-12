import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from './model/Posts';
import { UserStatus } from './model/UserStatus';
import { Comment } from './model/Comment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public comments: Comment[]
  public posts: Posts[]
  currentUser: UserStatus

  constructor(public http: HttpClient) {
    this.posts = []
    this.comments = []
  }

  getPosts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.get('http://localhost:3001/companyposts/all', httpOptions)
  }


  addPost(post: Posts) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.post('http://localhost:3001/companyposts/post/save', post, httpOptions)
  }


  deletePost(pid: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };

    return this.http.delete('http://localhost:3001/companyposts/delete/' + pid, httpOptions)
  }

  editPost(post: Posts) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.put('http://localhost:3001/companyposts/edit', post, httpOptions)


  }
  addComment(comment: Comment) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.post('http://localhost:3001/companyposts/comment/save', comment, httpOptions)
  }

  getComments(pid: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.get('http://localhost:3001/companyposts/comment/' + pid, httpOptions)
  }
  deleteComment(commentId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };

    return this.http.delete('http://localhost:3001/companyposts/comment/delete/' + commentId, httpOptions)
  }


}
