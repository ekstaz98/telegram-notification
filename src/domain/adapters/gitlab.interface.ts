export interface IGitlabService {
    getMergeRequests<T>(param: T): Promise<T>;
}