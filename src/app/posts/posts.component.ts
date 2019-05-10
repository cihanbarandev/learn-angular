import { BadRequestError } from './../common/bad-request-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  // get posts
  ngOnInit() {
    this.postService.getAll()
      .subscribe(
        (posts: any[]) => {
          this.posts = posts;
        });
  }

  // create new post
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    console.log(this.posts);
    this.posts.unshift(post);

    input.value = '';

    this.postService.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
        },
        (error: AppError) => {
          this.posts.shift();

          if (error instanceof BadRequestError) {
            // this.form.setErrors(error.originalError );
          } else throw error;
        });
  }

  // update post
  updatePost(post) {
    this.postService.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  // delete post
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else throw error;
        });
  }
}