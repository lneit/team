import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { Employee } from '../../../models/employee';
import { Service } from '../../../services/service';
import { FileStorage } from '../../../repository/file-storage';

type Data = {
  message: string;
  employee?: Employee;
};

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const employeeId = req.query.employeeId as string;

  //TODO implement it in the DI container
  const EMPLOYEE_FILE_PATH = path.join(process.cwd(), 'data', 'employees.json');
  const storage = new FileStorage<Employee>(EMPLOYEE_FILE_PATH);
  const service = new Service<Employee>(storage);

  if (req.method === 'GET') {
    const employee = service.get(employeeId);
    if (employee) {
      res.status(200).json({
        message: `Found employee, id ${employeeId}`,
        employee: employee,
      });
    } else {
      res.status(404).json({
        message: `Could not find employee, id ${employeeId}`,
        employee: employee,
      });
    }
  } else if (req.method === 'DELETE') {
    const employee = service.delete(employeeId);
    res.status(200).json({
      message: `Deleted employee id ${employeeId}`,
    });
  } else if (req.method === 'PUT') {
    const updatedEmployee = req.body as Employee;
    const employee = service.update(employeeId, updatedEmployee);
    res.status(200).json({
      message: `Updated employee id ${employeeId}`,
    });
  } else {
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported` });
  }
}

export default handler;
