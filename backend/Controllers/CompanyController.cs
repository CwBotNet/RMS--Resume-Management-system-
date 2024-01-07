using AutoMapper;
using backend.core.Context;
using backend.core.Dtos.Company;
using backend.core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public CompanyController(ApplicationDbContext context, IMapper mapper)
        {
                _context = context;
                _mapper = mapper;
        }

        //CRUD

        // Create
        [HttpPost]
        public async Task<IActionResult> CreateCompany ([FromBody] CompanyCreateDto dto)
        {
            try
            {
                if (dto != null)
                {

                    //using auto mapper for dependency injection
                    Company newCompany = _mapper.Map<Company>(dto);
                    await _context.Companies.AddAsync(newCompany);
                    await _context.SaveChangesAsync();
                    return Ok("Company created successfully");
                }

                return NoContent();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Read
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyGetDto>>> GetCompany()
        {
            var companies = await _context.Companies.ToListAsync();
            var convertedCompanies = _mapper.Map<IEnumerable<CompanyGetDto>>(companies);

            return Ok(convertedCompanies);
        }

        //Update
        [HttpPut("{id}")]
        public async Task<ActionResult> updateCompany(long id, [FromBody] CompanyUpdateDto dto)
        {
            try
            {
                var exestingCompany = await _context.Companies.FindAsync(id);
                if(id < 0) return NotFound();

                if( exestingCompany == null)
                {
                    return NotFound("company data not found");
                }

                _mapper.Map(dto, exestingCompany);
                await _context.SaveChangesAsync();
                return Ok("updated successfuly");
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Delete
        
        [HttpDelete("{id}")]

        public async Task<ActionResult> Delete(long id)
        {
            var exesitingCompany = await _context.Companies.FindAsync(id);
            try
            {
                if (exesitingCompany == null) 
                { 
                    return NotFound("invalid company id"); 
                }

                _context.Companies.Remove(exesitingCompany);
                await _context.SaveChangesAsync();
                return Ok($"company {id} is deleted successfully");
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
