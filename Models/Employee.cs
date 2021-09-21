using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angularv2.Models
{
	public class Employee
	{
		[Key]
		public string code { get; set; }
		public string name { get; set; }
		public string gender { get; set; }
		public int annualSalary { get; set; }
		public string dateOfBirth { get; set; }
	}
}
