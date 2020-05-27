export interface IUserService {
    signIn(): Promise<any>,
    storeAccountId(): Promise<any>,
    loadMyAccount(): Promise<any>,
}