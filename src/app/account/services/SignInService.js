
class SignInService {
    constructor({ accountService }) {
        this.accountService = accountService;
    }

    async signIn({ account, password }) {
        const res = await this.accountService.signIn({
            account,
            password,
            role: 1
        });
        console.log(res);
    }
}

export { SignInService };