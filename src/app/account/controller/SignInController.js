import { controller } from 'snowball/app';
import SignIn from '../containers/SignIn';
import { SignInConfiguration } from '../configuration';

@controller({
    component: SignIn,
    configuration: SignInConfiguration
})
class SignInController {
}

export default SignInController;