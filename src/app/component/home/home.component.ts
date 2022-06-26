import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { AuthService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  posts: Post[] = [];

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPost().subscribe({
      next: (response: any) => {
        this.posts = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  delete(id: number) {
    this.postService.delete(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getPosts();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  readMore(id: number) {
    console.log(id);
    this.router.navigate(['/post', id]);
  }
}