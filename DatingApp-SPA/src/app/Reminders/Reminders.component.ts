import { Component, OnInit } from '@angular/core';
import { Reminder } from '../.models/reminder';
import { ReminderService } from '../_services/Reminder.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminders',
  templateUrl: './Reminders.component.html',
  styleUrls: ['./Reminders.component.css']
})
export class RemindersComponent implements OnInit {
  reminders: Reminder[];
  userId: number;
  deletedReminder: any = {};
  addedReminder: any = {};
  addMode = false;

  constructor(
    private authService: AuthService,
    private reminderService: ReminderService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadReminders();
  }

  loadReminders() {
    this.userId = this.authService.decodedToken.nameid;
    this.reminderService.getReminders(this.userId).subscribe(
      (reminders: Reminder[]) => {
        this.reminders = reminders;
      },
      error => {
        this.alertify.error('Failed');
      }
    );
  }

  addToggle() {
    this.addMode = !this.addMode;
    this.router.navigate(['/Reminder/new']);
  }

  cancelAddMode(addMode: boolean) {
    this.addMode = addMode;
  }

  deleteReminder($event) {
    const index = this.reminders.indexOf($event);

    if (index !== -1) {
      this.reminders.splice(index, 1);
    }
  }

  addReminder($event) {
      this.reminders.push($event);
  }
}
