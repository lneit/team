import fs from 'fs';
import path from 'path';

export function getEmployeesFilePath() {
  return path.join(process.cwd(), 'data', 'employees.json');
}

export function extractEmployeeData(filePath: any) {
  const currentData = fs.readFileSync(filePath);
  return JSON.parse(currentData.toString());
}
