import { Service, autowired } from "snowball/app";
import { message } from "antd";
import UserService from "sn-cornerstone/services/UserService";

class SignInService extends Service {
    onSignIn = this.ctx.createEmitter();

    @autowired
    _userService: UserService;

    constructor() {
        super();

        this.onSignIn((data) => this.signIn(data));
    }

    async signIn({ account, password }) {
        try {
            const res = await this._userService.signIn({
                account,
                password,
                app: 1
            });
            this._userService.storeAccountId(res.accountId);
            this._userService.loadMyAccount();
            this.ctx.navigation.replace('/');
        } catch (e) {
            message.error(e.message || '网络异常');
        }
    }
}

export { SignInService };