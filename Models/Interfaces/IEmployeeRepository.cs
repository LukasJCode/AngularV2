using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angularv2.Models.Interfaces
{
	public interface IEmployeeRepository
	{
		Employee GetEmployee(string Id);
		IEnumerable<Employee> GetAllEmployees();
		Employee Add(Employee employee);
		Employee Update(Employee employeeChanges);
		Employee Delete(string id);
	}
}
