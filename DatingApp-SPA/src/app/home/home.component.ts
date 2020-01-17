import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged OK');
    }, error => {
      this.alertify.error('Failed to log in');
    }, () => {
      this.router.navigate(['/Reminders']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
