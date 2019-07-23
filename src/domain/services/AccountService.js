import { Service } from "snowball/app";

export type SignInParams = {
    account: string,
    password: string,
    role: number,
}

class AccountService extends Service {
    signIn({ account, password, role }: SignInParams) {
        return this.ctx.server.request('/admin/login', { account, password, role });
    }
}

export { AccountService };