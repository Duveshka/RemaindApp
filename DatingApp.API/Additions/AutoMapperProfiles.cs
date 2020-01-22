using AutoMapper;
using DatingApp.API.dtos;
using DatingApp.API.Models;
using System.Linq;

namespace DatingApp.API.Additions
{
    public class AutoMapperProfiles : Profile
    {
       public AutoMapperProfiles()
       {
           CreateMap<Reminder, ReminderForListdto>();
           CreateMap<Reminder, ReminderForDetaildto>();
       } 
    }
}