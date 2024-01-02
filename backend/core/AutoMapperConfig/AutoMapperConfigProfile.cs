using AutoMapper;
using backend.core.Dtos.Candidate;
using backend.core.Dtos.Company;
using backend.core.Dtos.Job;
using backend.core.Entities;

namespace backend.core.AutoMapperConfig
{
    public class AutoMapperConfigProfile :Profile
    {
        public AutoMapperConfigProfile()
        {
            // Company 
            CreateMap<CompanyCreateDto, Company>();
            CreateMap<Company, CompanyGetDto>();

            CreateMap<CompanyUpdateDto, Company>();

            // Job
            CreateMap<JobCreateDto, Job>();
            CreateMap<Job, JobGetDto>()
                .ForMember(dest => dest.CompanyName, opt => opt.MapFrom(src => src.Company.Name));

            CreateMap<JobUpdateDto, Job>();

            // Candidate
            CreateMap<CandidateCreateDto, Candidate>();
            CreateMap<Candidate, CandidateGetDto>()
                .ForMember(dest => dest.JobTitle, opt => opt.MapFrom(src => src.Job.Title));

            CreateMap<CandidateUpdateDto, Candidate>();


        }
    }
}
