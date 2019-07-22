import HomeController from "./home/controllers/HomeController";
import SignInController from "./account/controller/SignInController";

export default {
    '/': HomeController,
    '/test': import("./Test"),
    '/sign-in': SignInController,
};