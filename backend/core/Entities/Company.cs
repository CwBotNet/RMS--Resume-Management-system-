using backend.core.Enums;

namespace backend.core.Entities
{
    public class Company : BaseEntity
    {
        public string Name { get; set; }
        public CompanySize Size { get; set; }

        // Realations
        public ICollection<Job> Jobs { get; set; }


    }
}
