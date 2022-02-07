import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { Employee } from '../../../models/employee';
import { Service } from '../../../services/service';
import { FileStorage } from '../../../repository/file-storage';

type Data = {
  message: string;
  createdEmployee?: Employee;
  employees?: Employee[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //TODO implement it in the DI container
  const EMPLOYEE_FILE_PATH = path.join(process.cwd(), 'data', 'employees.json');
  const storage = new FileStorage<Employee>(EMPLOYEE_FILE_PATH);
  const service = new Service<Employee>(storage);

  if (req.method === 'POST') {
    const newEmployee = req.body as Employee;

    const employee = service.create(newEmployee);

    res.status(201).json({
      message: `Successfully created a new employee with id ${employee.id}`,
      createdEmployee: employee,
    });
  } else if (req.method === 'GET') {
    const employees = service.list();
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
