import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration successful');
      this.authService.login(this.model).subscribe(() => {
        this.router.navigate(['/Reminder']);
      }, error => {
        this.alertify.error('Fail');
      });
    }, error => {
      this.alertify.error('Fail');
    },
      () => {
        this.router.navigate(['/Rreminder']);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
