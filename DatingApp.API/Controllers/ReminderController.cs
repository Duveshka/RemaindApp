using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/{userId}/[controller]")]
    [ApiController]
    public class ReminderController : ControllerBase
    { 
        private readonly IReminderRepository _repo;
        private readonly IMapper _mapper;
        public ReminderController(IReminderRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        
        [HttpGet]
        public async Task<IActionResult> GetReminders(int userId)
        {
            //     Console.Write(userId);
            //     Console.Write("ATTENTION");
            //     // Console.Write(User);

                
            // if (userId != int.Parse(user.FindFirst(ClaimTypes.NameIdentifier).Value)){
                
            //     return Unauthorized();}
                
            

            var reminders = await _repo.GetReminders(userId);

            var remindersToReturn = _mapper.Map<IEnumerable<ReminderForListdto>>(reminders);

            return Ok(remindersToReturn);

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReminder(int userId, int id)
        {
        
            // if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)){
            //     
            //     return Unauthorized();}
            
            var reminder = await _repo.GetReminder(id);

            var reminderToReturn = _mapper.Map<ReminderForDetaildto>(reminder);

            return Ok(reminderToReturn);
        }
    }

}