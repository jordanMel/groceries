import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email = 'nativescriptrocks@progress.com';

  constructor() { }

  ngOnInit() {
  }

  submit() {
    alert('You’re using: ' + this.email);
  }


}
