import {Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ReminderListComponent } from './ReminderList/ReminderList.component';
import { RemindersComponent } from './Reminders/Reminders.component';
import { AddReminderComponent } from './Reminders/addReminder/addReminder.component';
import { AuthGuard } from './.guards/AuthGuard';


export const appRoutes: Routes = [
         { path: '', component: HomeComponent },
         {
           path: '',
           runGuardsAndResolvers: 'always',
           canActivate: [AuthGuard],
           children: [
             { path: 'Lists', component: ReminderListComponent },
             { path: 'Reminder', component: RemindersComponent },
             { path: 'Reminder/new', component: AddReminderComponent }
           ]
         },
         { path: '**', redirectTo: '', pathMatch: 'full' }
       ];
