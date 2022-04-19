using System.ComponentModel.DataAnnotations;
using System;
namespace SampleWebApp
{
    public class Medicine
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Notes { get; set; }
        [Required]
        public DateTime ExpDate { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}