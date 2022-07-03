export interface MessageRepository {
    insert(command: string): Promise<string>;
    findAll(): Promise<string[]>;
}