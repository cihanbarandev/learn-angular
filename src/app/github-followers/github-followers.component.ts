import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];

  constructor(private githubFollowersService: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    combineLatest(this.route.paramMap, this.route.queryParamMap)
      .pipe(
        switchMap(combined => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');

          // this.githubFollowersService.getAll({ id: id, page: page})
          return this.githubFollowersService.getAll()
        })
      )
      .subscribe((followers: any[]) => {
        this.followers = followers;
      });

    this.route.paramMap
      .subscribe(params => params);

    this.route.queryParamMap
      .subscribe(params => params);
  }
}
