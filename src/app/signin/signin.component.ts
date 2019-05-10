import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  invalidLogin: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    const email: string = form.value.email;
    const password: string = form.value.password;

    this.authService.signinUser(email, password)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/']);
        } else {
          this.invalidLogin = true;
        }
      });
  }

}
