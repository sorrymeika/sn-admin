import { configuration } from "snowball/app";
import { SignInService } from "./services/SignInService";

export const SignInConfiguration = configuration({
    modules: {
        signInService: SignInService
    }
});