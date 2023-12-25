using System.ComponentModel.DataAnnotations;

namespace backend.core.Entities
{
    public class BaseEntity
    {
        [Key]
        public long ID { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public bool IsActive { get; set; } = true;

    }
}
