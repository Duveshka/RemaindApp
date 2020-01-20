using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IReminderRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<IEnumerable<Reminder>> GetReminders(int userId);
        Task<Reminder> GetReminder(int id);
        

    }
}