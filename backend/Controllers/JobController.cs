using AutoMapper;
using backend.core.Context;
using backend.core.Dtos.Job;
using backend.core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public JobController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //CRUD

        // Create
        [HttpPost]

        public async Task<IActionResult> CreateJob([FromForm] JobCreateDto dto)
        {
            try
            {
                if (dto == null)
                {
                    return BadRequest();
                }

                var newJob = _mapper.Map<Job>(dto);
                await _context.Jobs.AddAsync(newJob);
                await _context.SaveChangesAsync();

                return Ok("Job created Successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Read

        [HttpGet]

        public async Task<ActionResult<IEnumerable<JobGetDto>>> GetJob()
        {
            try
            {
                var jobs = await _context.Jobs.Include(job => job.Company)
                    .OrderByDescending(q => q.CreatedAt)
                    .ToListAsync();

                var convertedJobs = _mapper.Map<IEnumerable<JobGetDto>>(jobs);

                return Ok(convertedJobs);

            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Update

        [HttpPut("{id}")]

        public async Task<ActionResult> updateJob(long id, [FromForm] JobUpdateDto dto)
        {
            try
            {
                var exestingJob = await _context.Jobs.FindAsync(id);

                if (id < 0)
                {
                    return NotFound("invalid id");
                }else if (exestingJob == null)
                {
                    return BadRequest("exesting job not found");
                };

                _mapper.Map(dto, exestingJob);
                await _context.SaveChangesAsync();
                return Ok("job updated successfuly");

            
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Delete
    }
}
