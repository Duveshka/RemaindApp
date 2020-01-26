import {Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ReminderListComponent } from './ReminderList/ReminderList.component';
import { RemindersComponent } from './Reminders/Reminders.component';
import { AddReminderComponent } from './Reminders/addReminder/addReminder.component';
import { AuthGuard } from './.guards/AuthGuard';
import { EditReminderComponent } from './Reminders/editReminder/editReminder.component';


export const appRoutes: Routes = [
         { path: '', component: HomeComponent },
         {
           path: '',
           runGuardsAndResolvers: 'always',
           canActivate: [AuthGuard],
           children: [
             { path: 'Lists', component: ReminderListComponent },
             { path: 'Reminder', component: RemindersComponent },
             { path: 'Reminder/new', component: AddReminderComponent },
             { path: 'Reminder/edit/:ReminderId', component: EditReminderComponent }
           ]
         },
         { path: '**', redirectTo: '', pathMatch: 'full' }
       ];
