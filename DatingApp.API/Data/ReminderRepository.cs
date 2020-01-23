using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class ReminderRepository : IReminderRepository
    {
        private readonly DataContext _context;
        public ReminderRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Reminder> GetReminder(int id)
        {
            var reminder = await _context.Reminders.FirstOrDefaultAsync(u => u.ReminderId == id);
            return reminder;
        }

        public async Task<IEnumerable<Reminder>> GetReminders(int userId)
        {
            var reminders = await _context.Reminders.Where(p => p.UserId == userId).ToListAsync();
            return reminders;
        }
    }
}