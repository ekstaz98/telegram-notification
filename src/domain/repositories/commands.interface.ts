export interface CommandsRepository {
  insert<T>(command: T): Promise<T>;
}