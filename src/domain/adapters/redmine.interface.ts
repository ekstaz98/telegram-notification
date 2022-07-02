export interface IRedmineService {
    getNewTasks<T>(param: T): Promise<T>;
}