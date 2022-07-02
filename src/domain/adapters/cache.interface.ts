export interface ICacheService {
    getFromCache<T>(param: T): Promise<T>;
    saveToCache<T>(param: T): Promise<T>;
}