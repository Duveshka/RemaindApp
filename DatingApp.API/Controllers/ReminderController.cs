using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.dtos;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
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
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
                
            var reminders = await _repo.GetReminders(userId);

            var remindersToReturn = _mapper.Map<ReminderForListdto>(reminders);

            return Ok(remindersToReturn);

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReminder(int userId, int id)
        {
        
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            
            var reminder = await _repo.GetReminder(id);

            var reminderToReturn = _mapper.Map<ReminderForDetaildto>(reminder);

            return Ok(reminderToReturn);
        }
    }

}