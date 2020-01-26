import { Reminder } from './reminder';

export interface User {
    id: number;
    userName: string;
    reminders?: Reminder[];
}
