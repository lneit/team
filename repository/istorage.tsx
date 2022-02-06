// Repository interface contract following the generic pattern.
export interface IStorage<T> {
  list(): T[];
  get(id: string): T;
  create(item: Partial<T>): T;
  update(id: string, item: T): T;
  delete(id: string): T;
}
