import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = +params.get('id');
      });
  }

  submit() {
    this.router.navigate(['/github-followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
