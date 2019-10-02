import { Component, OnInit } from '@angular/core';
import { User } from '@src/app/shared/user/user.model';
import { UserService } from '@src/app/shared/user/user.service';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'app-login',
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: User;

  isLoggingIn = true;
  email = 'nativescriptrocks@progress.com';

  constructor(
    public userSrv: UserService,
    private router: Router,
    private page: Page
  ) {
    this.user = new User();
    this.user.email = 'jordansample@gmail.com';
    this.user.password = 'jordan';
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {

    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }

  }

  login() {
    this.userSrv.login(this.user)
      .subscribe(
        () => this.router.navigate(['/list']),
        (exception) => {
          if (exception.error && exception.error.description) {
            alert(exception.error.description);
          } else {
            alert(exception);
          }
        }
      );
  }

  signUp() {
    this.userSrv.register(this.user)
      .subscribe(
        () => {
          alert('Your account was successfully created.');
          this.toggleDisplay();
        },
        (exception) => {
          if (exception.error && exception.error.description) {
            alert(exception.error.description);
          } else {
            alert(exception);
          }
        }
      );
  }


  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

}
