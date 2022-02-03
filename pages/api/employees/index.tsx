import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { NewEmployee, Employee } from '../../api-types';
import { getEmployeesFilePath, extractEmployeeData } from '../../api-helpers';

type Data = {
  message: string;
  createdEmployee?: Employee;
  employees?: [Employee];
};

function createEmployee(newEmployee: NewEmployee): Employee {
  const employee = {
    ...newEmployee,
    id: uuidv4(),
  };

  const filePath = getEmployeesFilePath();
  const data = extractEmployeeData(filePath);
  data.push(employee);
  fs.writeFileSync(filePath, JSON.stringify(data));

  return employee;
}

function listEmployees(): [Employee] {
  const filePath = getEmployeesFilePath();
  return extractEmployeeData(filePath);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const newEmployee = req.body as NewEmployee;
    const employee = createEmployee(newEmployee);

    res.status(201).json({
      message: `Successfully created a new employee with id ${employee.id}`,
      createdEmployee: employee,
    });
  } else if (req.method === 'GET') {
    const employees = listEmployees();
    res.status(200).json({
      message: `Listing all employees`,
      employees,
    });
  } else {
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported` });
  }
}
