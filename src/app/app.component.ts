import { Component, OnInit } from '@angular/core';
import { FavoriteChangedEvent } from './favorite/favorite.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Learn Angular';
  isFavorite: boolean = true;
  courses: any[] = ['course1', 'course2', 'course3'];
  viewMode: string = 'map';

  onFavoriteChange(eventArgs: FavoriteChangedEvent) {
    console.log('Favorite changed!', eventArgs);
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBGckxHKIQUM18xKWLFHPAnUTnR_8ovCiE',
      authDomain: 'learn-angular-c5e6b.firebaseapp.com'
    });
  }
}
