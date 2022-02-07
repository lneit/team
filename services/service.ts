import { v4 as uuidv4 } from 'uuid';
import { IService } from './iservice';
import { IStorage } from '../repository/istorage';

// CRUD Service interface implementation.
export class Service<T> implements IService<T> {
  public readonly _storage: IStorage<T>;

  constructor(storage: IStorage<T>) {
    this._storage = storage;
  }

  list(): T[] {
    return this._storage.list();
  }

  get(id: string): T {
    return this._storage.get(id);
  }

  create(item: Partial<T>): T {
    const itemWithId = {
      ...item,
      id: uuidv4(),
    };
    return this._storage.create(itemWithId);
  }

  update(id: string, item: T): T {
    return this._storage.update(id, item);
  }

  delete(id: string): T {
    return this._storage.delete(id);
  }
}
