import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(httpClient: HttpClient, authService: AuthService) {

    // const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

    const postsUrl: string = 'https://learn-angular-c5e6b.firebaseio.com/data.json?auth=' + authService.getToken();
    super(postsUrl, httpClient);
  }
}