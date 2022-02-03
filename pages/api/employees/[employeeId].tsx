import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { Employee } from '../../api-types';
import { getEmployeesFilePath, extractEmployeeData } from '../../api-helpers';

type Data = {
  message: string;
  employee?: [Employee];
};

function getEmployee(employeeId: string | string[]) {
  const filePath = getEmployeesFilePath();
  const data = extractEmployeeData(filePath);

  return data.find((item: Employee) => item.id === employeeId);
}

function deleteEmployee(employeeId: string | string[]) {
  const filePath = getEmployeesFilePath();
  const data = extractEmployeeData(filePath);

  const filteredData = data.filter((item: Employee) => item.id !== employeeId);
  fs.writeFileSync(filePath, JSON.stringify(filteredData));
}

function updateEmployee(employeeId: string | string[], employee: Employee) {
  const filePath = getEmployeesFilePath();
  const data = extractEmployeeData(filePath);

  const filteredData = data.filter((item: Employee) => item.id !== employeeId);

  const updatedEmployees = [...filteredData, employee];

  fs.writeFileSync(filePath, JSON.stringify(updatedEmployees));
}

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const employeeId = req.query.employeeId;

  if (req.method === 'GET') {
    const employee = getEmployee(employeeId);
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
    deleteEmployee(employeeId);
    res.status(200).json({
      message: `Deleted employee id ${employeeId}`,
    });
  } else if (req.method === 'PUT') {
    const updatedEmployee = req.body as Employee;
    updateEmployee(employeeId, updatedEmployee);
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
