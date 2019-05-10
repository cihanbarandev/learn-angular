import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();
  starContentFill: string = 'star';
  starContentBorder: string = 'star_border';
  starContent: string;

  constructor() { }

  ngOnInit() {
    this.starContent = this.isFavorite ? this.starContentFill : this.starContentBorder;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.starContent = this.isFavorite ? this.starContentFill : this.starContentBorder;
    this.change.emit({
      newValue: this.isFavorite
    });
  }
}

export interface FavoriteChangedEvent {
  newValue: boolean
}
