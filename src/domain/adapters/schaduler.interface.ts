export interface ISchadulerService {
    run<T>(param: T): Promise<T>;
}