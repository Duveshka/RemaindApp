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
import { appRoutes } from './routes';
import { ReminderService } from './_services/Reminder.service';
import { AlertifyService } from './_services/alertify.service';


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
    ReminderCardComponent
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
    })
  ],
  providers: [AuthService, AlertifyService, ReminderService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
