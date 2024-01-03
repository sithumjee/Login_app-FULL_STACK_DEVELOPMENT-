import { Router } from "express";
import ENV from "../config.js";
const router = Router();

/**Import * controllers */
import * as controller from "../controllers/appController.js";

/**POST methods */

router.route("/register").post(controller.register); //register user
router.route("/login").post(controller.login); //login user
router.route("/registerMail").post(); //register user with mail
router.route("/authenticate").post((req, res) => res.end()); //authenticate user

/**GET methods */
router.route("/user/:username").get(controller.getUser); //get the user by username
router.route("/generateOTP").get(controller.generateOTP); //generate OTP
router.route("/verifyOTP").get(controller.verifyOTP); //verify OTP
router.route("/createResetSession").get(controller.createResetSession); //create reset session

/**PUT methods */
router.route("/updateUser").put(controller.updateUser); //update the user
router.route("/resetPassword").put(controller.resetPassword); //reset the password

/**export router */
export default router;
