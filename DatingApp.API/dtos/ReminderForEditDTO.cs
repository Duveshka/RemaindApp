using System;

namespace DatingApp.API.dtos
{
    public class ReminderForEditDTO
    {
        public int ReminderId { get; set; }
        public DateTime DateTime { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}