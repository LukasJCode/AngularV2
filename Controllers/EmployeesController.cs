using Angularv2.Models;
using Angularv2.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angularv2.Controllers
{
	public class EmployeesController : Controller
	{
		private readonly IEmployeeRepository employeeRepository;

		public EmployeesController(IEmployeeRepository employeeRepository)
		{
			this.employeeRepository = employeeRepository;
		}

		[HttpGet]
		public IEnumerable<Employee> GetEmployees()
		{
			return employeeRepository.GetAllEmployees();
		}

		[HttpGet]
		public Employee GetEmployee(string id)
		{
			return employeeRepository.GetEmployee(id);
		}
	}
}
