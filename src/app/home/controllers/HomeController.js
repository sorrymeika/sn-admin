import { controller } from "snowball/app";
import Home from "../containers/Home";

@controller(Home)
class HomeController {
    // constructor({ location }, context) {
    // }

    onInit() {
        // fetch remote data here!
    }

    onButtonClick() {
        this.ctx.navigation.forward('/test');
    }

    toSignIn() {
        this.ctx.navigation.transitionTo('/sign-in');
    }
}

export default HomeController;
