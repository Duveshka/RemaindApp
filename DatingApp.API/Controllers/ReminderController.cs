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
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var reminders = await _repo.GetReminders(userId);

            var remindersToReturn = _mapper.Map<IEnumerable<ReminderForListdto>>(reminders);

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

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteReminder(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var reminderFromRepo = await _repo.GetReminder(id);

            _repo.Delete(reminderFromRepo);

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Failed to delete");

        }

        [HttpPost]

        public async Task<IActionResult> AddReminder(int userId, [FromBody]ReminderForAdddto reminderForAdddto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            await _repo.AddReminder(userId, reminderForAdddto);
            
            return Ok();
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditReminder(int userId, int id,
         [FromBody]ReminderForEditDTO reminderForEditDTO)
        {
            
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            _repo.EditReminder(userId, id, reminderForEditDTO);
            await _repo.SaveAll();

            return Ok();
        }


    }

}