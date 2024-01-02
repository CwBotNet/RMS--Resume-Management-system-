using backend.core.Enums;

namespace backend.core.Dtos.Company
{
    public class CompanyUpdateDto
    {
        public string Name { get; set; }
        public CompanySize Size { get; set; }


        // Realations
        //public ICollection<Job> Jobs { get; set; }
    }
}
