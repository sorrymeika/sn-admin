import { configuration } from "snowball/app";
import SignInViewModel from "./view-models/SignInViewModel";

export const SignInConfiguration = configuration({
    modules: {
        signInViewModel: SignInViewModel
    }
});