import { Component, OnInit } from '@angular/core';
import { Reminder } from '../.models/reminder';
import { ReminderService } from '../_services/Reminder.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './Reminders.component.html',
  styleUrls: ['./Reminders.component.css']
})
export class RemindersComponent implements OnInit {
  reminders: Reminder [];
  userId: number;
  constructor(private authService: AuthService, private reminderService: ReminderService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadReminders();
  }

  loadReminders() {
    this.userId = this.authService.decodedToken.nameid;
    this.reminderService.getReminders(this.userId).subscribe((reminders: Reminder[]) => {
      this.reminders = reminders;
    }, error => {
      this.alertify.error('Failed ');
    });
  }

}
