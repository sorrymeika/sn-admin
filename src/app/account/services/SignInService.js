import { Service } from "snowball/app";
import { message } from "antd";

class SignInService extends Service {
    onSignIn = this.ctx.createEvent();

    constructor({ authService }) {
        super();

        this.authService = authService;
        this.onSignIn((data) => this.signIn(data));
    }

    async signIn({ account, password }) {
        try {
            const res = await this.authService.signIn({
                account,
                password,
                app: 1
            });
            this.authService.storeAccountId(res.accountId);
            this.ctx.navigation.replace('/');
        } catch (e) {
            message.error(e.message || '网络异常');
        }
    }
}

export { SignInService };