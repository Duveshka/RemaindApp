import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './.guards/AuthGuard';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ReminderListComponent } from './ReminderList/ReminderList.component';
import { RemindersComponent } from './Reminders/Reminders.component';
import { ReminderCardComponent } from './Reminders/ReminderCard/ReminderCard.component';
import { AddReminderComponent } from './Reminders/addReminder/addReminder.component';
import { EditReminderComponent } from './Reminders/editReminder/editReminder.component';
import { appRoutes } from './routes';
import { ReminderService } from './_services/Reminder.service';
import { AlertifyService } from './_services/alertify.service';
import { EditService } from 'src/app/_services/edit.service';
import { PushNotificationsModule } from 'ng-push';



export function tokenGetter() {
  return localStorage.getItem('token');

}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ReminderListComponent,
    RemindersComponent,
    ReminderCardComponent,
    AddReminderComponent,
    EditReminderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line: object-literal-shorthand
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']

      }
    }),
    PushNotificationsModule
  ],
  providers: [AuthService, AlertifyService, EditService, ReminderService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
