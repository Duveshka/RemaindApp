using System;
using DatingApp.API.Models;

namespace DatingApp.API.dtos
{
    public class ReminderForListdto
    {
        public int ReminderId { get; set; }
        public DateTime DateTime { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        
    }
}