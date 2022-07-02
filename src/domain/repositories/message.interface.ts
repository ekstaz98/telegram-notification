export interface MessageRepository {
    insert<T>(command: T): Promise<T>;
    findAll<T>(): Promise<T>;
}