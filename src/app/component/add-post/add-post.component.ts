import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  post: Post = {
    id: 0,
    title: '',
    image: '',
    content: '',
    content2: '',
  };

  constructor(
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.post.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.post.id).subscribe({
      next: (response: any) => {
        this.post = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  addPost() {
    if (this.post.id === 0) {
      console.log(this.post)
      this.postService.save(this.post).subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    } else {
      this.postService.update(this.post).subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}