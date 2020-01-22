using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(19, MinimumLength = 4, ErrorMessage = "between 4 and 8 symbols")]
        public string Password { get; set; }
    }
}