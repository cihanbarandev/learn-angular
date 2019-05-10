import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  isActive: boolean;
  email: string = 'me@example.com';

  constructor() {

  }

  onSave($event) {
    console.log('click', $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  ngOnInit() { }
}
