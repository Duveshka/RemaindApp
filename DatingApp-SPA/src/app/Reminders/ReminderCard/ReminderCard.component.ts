import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from 'src/app/.models/reminder';

@Component({
  selector: 'app-rcard',
  templateUrl: './ReminderCard.component.html',
  styleUrls: ['./ReminderCard.component.css']
})
export class ReminderCardComponent implements OnInit {
  @Input() reminder: Reminder;

  constructor() {}

  ngOnInit() {}
}
