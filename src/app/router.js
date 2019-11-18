import { lazy } from "snowball/app";
import HomeController from "./home/controllers/HomeController";
import ComingController from "./home/controllers/ComingController";
import SignInController from "./account/controller/SignInController";

export default {
    '/': HomeController,
    '/coming': ComingController,
    '/test': lazy(() => import("./Test")),
    '/sign-in': SignInController,
};