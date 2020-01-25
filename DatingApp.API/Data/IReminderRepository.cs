using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IReminderRepository
    {
        Task<Reminder> AddReminder(int userId, ReminderForAdddto reminderForAdddto);
        Reminder EditReminder(int userId, int ReminderId, ReminderForEditDTO reminderForEditDTO);
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Reminder>> GetReminders(int userId);
        Task<Reminder> GetReminder(int id);
        

    }
}