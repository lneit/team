// CRUD Service interface contract following the generic pattern.
export interface IService<T> {
  list(): T[];
  get(id: string): T;
  create(item: Omit<T, 'id'>): T;
  update(id: string, item: T): T;
  delete(id: string): T;
}
