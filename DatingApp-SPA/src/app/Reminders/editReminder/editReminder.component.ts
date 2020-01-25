import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ReminderService } from 'src/app/_services/Reminder.service';
import { Reminder } from 'src/app/.models/reminder';
import { Router } from '@angular/router';
import { EditService } from 'src/app/_services/edit.service';

@Component ({
  selector: 'app-editreminder',
  templateUrl: './editReminder.component.html',
  styleUrls: ['./editReminder.component.css']
})

export class EditReminderComponent implements OnInit {
  @Output() cancelEdit = new EventEmitter();
  reminder: Reminder;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private reminderService: ReminderService,
    private router: Router,
    private editService: EditService
  ) {
    this.reminder = this.editService.getReminder();
  }

  ngOnInit() {

  }

  editReminder() {
    this.reminderService
      .editReminder(
        this.authService.decodedToken.nameid,
        this.reminder.reminderId,
        this.reminder
      )
      .subscribe(
        () => {
          this.alertify.success('Successfully edited');
          this.router.navigate(['/Reminder']);
        },
        error => {
          this.alertify.error('Failed');
        }
      );
  }
  cancel() {
    this.cancelEdit.emit(false);
    this.router.navigate(['/Reminder']);
  }
}
