export interface IGitlabService {
    getMergeRequests(param: string): Promise<string>;
}