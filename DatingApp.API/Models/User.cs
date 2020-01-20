using System.Collections.Generic;

namespace DatingApp.API.Models
{
    public class User
    {
        public int id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public ICollection<Reminder> Reminders { get; set; }
    }
}

