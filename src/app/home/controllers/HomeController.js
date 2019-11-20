import { controller, injectable } from "snowball/app";
import Home from "../containers/Home";

@controller(Home)
class HomeController {
    // constructor({ location }, context) {
    // }

    onInit() {
        // fetch remote data here!
    }

    @injectable
    onButtonClick() {
        this.ctx.navigation.forward('/test');
    }

    @injectable
    toSignIn() {
        this.ctx.navigation.transitionTo('/sign-in');
    }
}

export default HomeController;
