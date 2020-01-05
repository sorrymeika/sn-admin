import { controller, autowired } from 'snowball/app';
import SignIn from '../containers/SignIn';
import { SignInConfiguration } from '../configuration';
import { SignInService } from '../services/SignInService';

@controller({
    component: SignIn,
    configuration: SignInConfiguration
})
class SignInController {
    @autowired
    signInService: SignInService;
}

export default SignInController;