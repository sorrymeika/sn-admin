import { controller, injectable } from 'snowball/app';
import { AuthService } from '../../../domain/services/AuthService';
import { SignInService } from '../services/SignInService';
import SignIn from '../containers/SignIn';

@controller(SignIn)
class SignInController {
    @injectable signInService;

    constructor() {
        const authService = new AuthService();

        this.signInService = new SignInService({
            authService
        });
    }

    onInit() {
        this.app.frame.hide();
    }

    onDestroy() {
        this.app.frame.show();
    }
}

export default SignInController;