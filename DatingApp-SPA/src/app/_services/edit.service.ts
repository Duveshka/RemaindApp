import { Injectable } from '@angular/core';
import { Reminder } from '../.models/reminder';

@Injectable({
  providedIn: 'root'
})
export class EditService {
private reminder: Reminder;

public doEdit(newReminder) {
  this.reminder = newReminder;
}

public getReminder() {
  return this.reminder;
}

}
