import { util } from "snowball";
import { Service } from "snowball/app";

export type SignInParams = {
    account: string,
    password: string,
}

class AuthService extends Service {
    signIn({ account, password, app }: SignInParams) {
        return this.ctx.server.auth.post('/auth/login', { account, password, app });
    }

    storeAccountId(accountId) {
        util.store('accountId', accountId);
    }

    getAccountId() {
        return util.store('accountId');
    }
}

export { AuthService };