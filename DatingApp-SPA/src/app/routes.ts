import {Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ReminderListComponent } from './ReminderList/ReminderList.component';
import { RemindersComponent } from './Reminders/Reminders.component';
import { AuthGuard } from './.guards/AuthGuard';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'Lists', component: ReminderListComponent},
            { path: 'Reminders', component: RemindersComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
