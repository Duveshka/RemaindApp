import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ReminderService } from 'src/app/_services/Reminder.service';
import { Reminder } from 'src/app/.models/reminder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreminder',
  templateUrl: './addReminder.component.html',
  styleUrls: ['./addReminder.component.css']
})
export class AddReminderComponent implements OnInit {
  @Output() cancelAdd = new EventEmitter();
  @Output() addedReminder = new EventEmitter();
  reminderForAdd: any = {};
  reminders: Reminder[];

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private reminderService: ReminderService,
    private router: Router
  ) {}

  ngOnInit() {}

  addReminder() {
    this.reminderService
      .addReminder(this.authService.decodedToken.nameid, this.reminderForAdd)
      .subscribe(
        () => {
          this.alertify.success('Successfully added');
          this.addedReminder.emit(this.reminderForAdd);
          this.router.navigate(['/Reminder']);
        },
        error => {
          this.alertify.error('Fail to add new Reminder');
        }
      );
  }

  cancel() {
    this.cancelAdd.emit(false);
    this.router.navigate(['/Reminder']);
  }
}
