import { controller, injectable } from 'snowball/app';
import { SignInService } from '../services/SignInService';
import SignIn from '../containers/SignIn';

@controller(SignIn)
class SignInController {
    @injectable signInService;

    constructor() {
        this.signInService = new SignInService(
            this.app.service.user
        );
    }
}

export default SignInController;