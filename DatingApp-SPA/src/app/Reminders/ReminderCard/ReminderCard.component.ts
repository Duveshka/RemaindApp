import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reminder } from 'src/app/.models/reminder';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ReminderService } from 'src/app/_services/Reminder.service';
import { EditService } from 'src/app/_services/edit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rcard',
  templateUrl: './ReminderCard.component.html',
  styleUrls: ['./ReminderCard.component.css']
})
export class ReminderCardComponent implements OnInit {
  @Input() reminder: Reminder;
  @Output() deletedReminder = new EventEmitter();

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private reminderService: ReminderService,
    private router: Router,
    private editService: EditService
  ) {}

  ngOnInit() {}

  deleteReminder() {
    this.reminderService.deleteReminder(this.authService.decodedToken.nameid, this.reminder.reminderId)
      .subscribe(() => {
          this.alertify.success('Successfully deleted');
          this.deletedReminder.emit(this.reminder);
        },
        error => {
          this.alertify.error('Failed');
        }
      );
  }

  editReminder() {
    this.editService.doEdit(this.reminder);
    this.router.navigate(['Reminder/edit/', this.reminder.reminderId]);
  }

}
