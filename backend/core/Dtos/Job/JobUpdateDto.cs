using backend.core.Enums;

namespace backend.core.Dtos.Job
{
    public class JobUpdateDto
    {
        public string Title { get; set; }
        public JobLevel Level { get; set; }
        public long CompanyId { get; set; }
    }
}
