export interface IHttpService {
    sendRequest(param: string): Promise<string>;
}