export interface IHttpService {
    sendRequest<T>(param: T): Promise<T>;
}