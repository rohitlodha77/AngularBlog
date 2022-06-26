import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post = {
    id: 0,
    title: '',
    image: '',
    content: '',
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.post.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.post.id).subscribe({
      next: (respose: any) => {
        console.log(respose);
        this.post = respose;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}