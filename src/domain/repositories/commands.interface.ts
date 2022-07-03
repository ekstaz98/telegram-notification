export interface CommandsRepository {
  insert(command: string): Promise<string>;
}