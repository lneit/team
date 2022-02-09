import { v4 as uuidv4 } from 'uuid';
import { IService } from './iservice';
import { IStorage } from '../repository/istorage';

// CRUD Service interface implementation.
export class Service<T extends {id: string}> implements IService<T> {

  constructor(private readonly _storage: IStorage<T>) {
  }

  list(): T[] {
    return this._storage.list();
  }

  get(id: string): T {
    return this._storage.get(id);
  }

  create(item: Omit<T, "id">): T {
    const itemWithId = {
      ...item,
      id: uuidv4(),
    } as T;
    return this._storage.create(itemWithId);
  }

  update(id: string, item: T): T {
    return this._storage.update(id, item);
  }

  delete(id: string): T {
    return this._storage.delete(id);
  }
}
