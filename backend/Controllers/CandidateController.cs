using AutoMapper;
using backend.core.Context;
using backend.core.Dtos.Candidate;
using backend.core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public CandidateController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //CRUD

        // Create
        [HttpPost]
        public async Task<IActionResult> CreateCandidate([FromForm] CandidateCreateDto dto, IFormFile pdfFile)
        {

            var fiveMegaBytes = 5 * 1024 * 1024;
            var pdfType = "application/pdf";

            try
            {
                if(pdfFile.Length > fiveMegaBytes || pdfFile.ContentType != pdfType)
                {
                    return BadRequest();
                }

                // first => save pdf to Server
                
                var resumeUrl = Guid.NewGuid().ToString() + ".pdf";
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Documents", "Pdf", resumeUrl);

                using(var stream = new FileStream(filePath, FileMode.Create))
                {
                    await pdfFile.CopyToAsync(stream);
                }
                
                // Then => save url into our entity

                var newCandidate = _mapper.Map<Candidate>(dto);
                newCandidate.ResumeUrl = resumeUrl;
                await _context.Candidates.AddAsync(newCandidate);
                await _context.SaveChangesAsync();

                return Ok("Candidate created successfully");
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Read

        [HttpGet]

        public async Task<ActionResult<IEnumerable<CandidateGetDto>>> GetCandidate()
        {
            try
            {
                var candidates = await _context.Candidates.Include(c => c.Job)
                    .OrderByDescending(q => q.CreatedAt).ToListAsync();

                var convertedCandidates = _mapper.Map<IEnumerable<CandidateGetDto>>(candidates);
                return Ok(convertedCandidates);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Download resume by candidateId {Read}

        [HttpGet("{url}")]

        public IActionResult Download(string url)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Documents", "Pdf", url);
            
            try
            {
                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound();
                }

                var pdfBytes = System.IO.File.ReadAllBytes(filePath);
                var file = File(pdfBytes, "application/pdf", url);
                return file;
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Update

        // Delete
    }
}
