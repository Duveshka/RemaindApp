import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reminder } from '../.models/reminder';


const httpOptions = {
  headers: new HttpHeaders({
    // tslint:disable-next-line: object-literal-key-quotes
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) {}

getReminders(userId: number): Observable<Reminder[]> {
  const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'}) ;
  return this.http.get<Reminder[]>(this.baseUrl + userId + '/Reminder', httpOptions);

}

getReminder(userId: number, ReminderId: number): Observable<Reminder[]> {
  const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'}) ;
  return this.http.get<Reminder[]>(this.baseUrl + userId + '/Reminder' + ReminderId, httpOptions);

}



}
