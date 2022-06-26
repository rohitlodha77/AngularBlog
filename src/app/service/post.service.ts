import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  save(post: Post) {
    return this.http.post('http://localhost:8081/api/post/create', post);
  }

  update(post: Post) {
    return this.http.put('http://localhost:8081/api/post/update', post);
  }

  getPost(id: number) {
    return this.http.get(`http://localhost:8081/api/post/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8081/api/post/${id}`);
  }

  getAllPost() {
    return this.http.get('http://localhost:8081/api/post/all');
  }
}