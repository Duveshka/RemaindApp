import {Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ReminderListComponent } from './ReminderList/ReminderList.component';
import { RemindersComponent } from './Reminders/Reminders.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'Lists', component: ReminderListComponent},
    { path: 'Reminders', component: RemindersComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
