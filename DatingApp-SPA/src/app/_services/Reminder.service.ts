import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reminder } from '../.models/reminder';



@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getReminders(userId: number): Observable<Reminder[]> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.get<Reminder[]>(this.baseUrl + userId + '/Reminder');
  }

  getReminder(userId: number, ReminderId: number): Observable<Reminder[]> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.get<Reminder[]>(this.baseUrl + userId + '/Reminder/' + ReminderId);
  }

  deleteReminder(userId: number, ReminderId: number): Observable<Reminder[]> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.delete<Reminder[]>(this.baseUrl + userId + '/Reminder/' + ReminderId);
  }

  addReminder(userId: number, reminder: Reminder) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(this.baseUrl + userId + '/Reminder', reminder);
  }

  editReminder(userId: number, ReminderId: number, reminder: Reminder) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.put(this.baseUrl + userId + '/Reminder/' + ReminderId, reminder);
  }
}
