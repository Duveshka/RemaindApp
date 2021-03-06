using System;
using System.Collections.Generic;

namespace DatingApp.API.Models
{
    public class Reminder
    {
        public int ReminderId { get; set; }
        public DateTime DateTime { get; set; }
        public string Name { get; set; }
         public string Description { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public Reminder(DateTime DateTime, string Name, string Description, int UserId)
        {
            this.Name = Name;
            this.DateTime = DateTime;
            this.Description = Description;
            this.UserId = UserId;
        }


    }
}