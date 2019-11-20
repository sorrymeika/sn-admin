import { util } from "snowball";
import { Service } from "snowball/app";
import { observable } from "snowball";

export type SignInParams = {
    account: string,
    password: string,
}

class UserService extends Service {
    @observable account;

    signIn({ account, password, app }: SignInParams) {
        return this.app.server.auth.post('/auth/login', { account, password, app });
    }

    async loadMyAccount() {
        const res = await this.getMyAccount();
        this.account = res.data;
        return res;
    }

    getMyAccount() {
        return this.app.server.auth.post('/admin/account/getMyAccount');
    }

    storeAccountId(accountId) {
        util.store('accountId', accountId);
    }

    getAccountId() {
        return util.store('accountId');
    }
}

export default UserService;