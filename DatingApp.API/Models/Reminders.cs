namespace DatingApp.API.Models
{
    public class Reminders
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string DateTime { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
    }
}