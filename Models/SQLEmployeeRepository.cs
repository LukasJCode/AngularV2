using Angularv2.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angularv2.Models
{
	public class SQLEmployeeRepository : IEmployeeRepository
	{
		private readonly AppDbContext context;

		public SQLEmployeeRepository(AppDbContext context)
		{
			this.context = context;
		}

		public Employee Add(Employee employee)
		{
			context.Employees.Add(employee);
			context.SaveChanges();
			return employee;
		}

		public Employee Delete(string id)
		{
			Employee employee = context.Employees.Find(id);
			if (employee != null)
			{
				context.Employees.Remove(employee);
				context.SaveChanges();
			}
			return employee;
		}

		public IEnumerable<Employee> GetAllEmployees()
		{
			return context.Employees;
		}

		public Employee GetEmployee(string Id)
		{
			return context.Employees.Find(Id);
		}

		public Employee Update(Employee employeeChanges)
		{
			var employee = context.Employees.Attach(employeeChanges);
			employee.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
			context.SaveChanges();
			return employeeChanges;
		}
	}
}
