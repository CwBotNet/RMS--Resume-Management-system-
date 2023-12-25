using backend.core.Enums;

namespace backend.core.Dtos.Company
{
    public class CompanyCreateDto
    {
        public string Name { get; set; }
        public CompanySize Size { get; set; }
    }
}
