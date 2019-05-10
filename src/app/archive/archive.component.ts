import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  year: number;
  month: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.year = +params.get('year');
        this.month = +params.get('month');
      });
    console.log(this.year, this.month);
  }

  viewAll() {
    this.router.navigate(['/']);
  }
}
