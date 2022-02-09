import fs from 'fs';
import { IStorage } from './istorage';

function extractEmployeeData(filePath: string) {
  const currentData = fs.readFileSync(filePath);
  return JSON.parse(currentData.toString());
}

// Repository interface implementation.
export class FileStorage<T extends { id: string }> implements IStorage<T> {

  constructor(private readonly _filePath: string) {
  }

  list(): T[] {
    return extractEmployeeData(this._filePath);
  }

  get(id: string): T {
    const data = extractEmployeeData(this._filePath);
    
    return data.find((item: T) => item.id === id);
  }

  create(item: T): T {
    const data = extractEmployeeData(this._filePath);

    data.push(item);
    fs.writeFileSync(this._filePath, JSON.stringify(data));
    return item;
  }

  update(id: string, item: T): T {
    const data = extractEmployeeData(this._filePath);

    const filteredData = data.filter((item: T) => item.id !== id);

    const updatedEmployees = [...filteredData, item];
    fs.writeFileSync(this._filePath, JSON.stringify(updatedEmployees));
    return item;
  }

  delete(id: string): T {
    const data = extractEmployeeData(this._filePath);

    const filteredData = data.filter((item: T) => item.id !== id);
    fs.writeFileSync(this._filePath, JSON.stringify(filteredData));
    return data.find((item: T) => item.id !== id);
  }
}
