import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { Posts } from './model/Posts';
import { PostsComponent } from './posts/posts.component';
import { RouterModule,Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { EditinfoComponent } from './editinfo/editinfo.component';
import { CommentComponent } from './comment/comment.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "comment/:pid",
    component: CommentComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
  SigninComponent,
  SignupComponent,
  HomeComponent,
  PostsComponent,
  AddComponent,
  EditComponent,
  InfoComponent,
  EditinfoComponent,
  CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }