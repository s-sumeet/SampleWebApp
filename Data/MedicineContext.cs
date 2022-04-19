using System;
using Microsoft.EntityFrameworkCore;
namespace SampleWebApp
{

    public class MedicineContext : DbContext
    {
      public MedicineContext (DbContextOptions<MedicineContext> options)
            : base(options)
        {
        }
        public DbSet<Medicine> Medicine { get; set; }
    }
}