// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let employeeObject; 

employeesArray.sort(function(a, b) {
  if (a.lastName < b.lastName) {
    return -1; }
    if (a.lastName > b.lastName) {
    return 1; } {
    return 0; }``
  }); 



while (true) {
    let firstName = prompt("Employee First Name:");
    let lastName = prompt("Employee Last Name:");
    let salary = prompt("Employee Salary:");
      if (isNaN(Number(salary))) {
        salary = 0;}

    employeeObject = {
      firstName: firstName,
      lastName: lastName, 
      salary: Number(salary), 
    }; 

    console.log(employeeObject);
    employeesArray.push(employeeObject); 

    let option = confirm("Do you want to add another employee?");
    if (!option) { 
      break; 
    }
}
  displayEmployees(employeesArray);
  return employeesArray; 
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalEmployees = employeesArray.length; 
  let totalSalary = 0;
  for (let i = 0; i < totalEmployees; i++) {
    totalSalary += employeesArray[i].salary; 
  }


let averageSalary = totalSalary / totalEmployees;
console.log("Average Employee Salary: " + averageSalary); 

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let drawEmployee = Math.floor(Math.random() * employeesArray.length); 
  let getRandomEmployee = employeesArray[drawEmployee];
  console.log("Congratulations to " + getRandomEmployee.firstName + " " + getRandomEmployee.lastName + " , our random drawing winner!"); 

}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
