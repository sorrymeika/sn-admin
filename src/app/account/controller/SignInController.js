import { controller, injectable } from 'snowball/app';
import { AccountService } from '../../../domain/services/AccountService';
import { SignInService } from '../services/SignInService';
import SignIn from '../containers/SignIn';

@controller(SignIn)
class SignInController {
    @injectable signInService;

    constructor() {
        const accountService = new AccountService();

        this.signInService = new SignInService({
            accountService
        });
    }
}

export default SignInController;