import { Component, OnInit } from '@angular/core';
import { Reminder } from '../.models/reminder';
import { ReminderService } from '../_services/Reminder.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { PushNotificationsService } from 'ng-push';
import {formatDate } from '@angular/common';

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
  reminder: Reminder;
  body: string;


  constructor(
    private authService: AuthService,
    private reminderService: ReminderService,
    private alertify: AlertifyService,
    private router: Router,
    private pushNotificationsService: PushNotificationsService
  ) {
    setInterval(() => { this.checkNotification(); }, 50000);
  }

  ngOnInit() {
    this.loadReminders();
  }

  // NOTIFICATIONS
  requestPermission() {
    this.pushNotificationsService.requestPermission();
  }

  checkNotification() {
    this.reminders.forEach(reminder => {
        let options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        let timeNow = new Date().toLocaleString('ko-KR', options);
        let timec = new Date(reminder.dateTime).toLocaleString('ko-KR', options);
        
        if (timeNow == timec) {
            this.pushNotification(reminder.name);
            timec = '';
        }
    });
  }
pushNotification(name: string) {
  this.pushNotificationsService.create(
      name,
      { body: 'Reminders App' }
  ) .subscribe();
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
