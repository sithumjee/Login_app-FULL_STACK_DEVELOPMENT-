import { Router } from "express";
const router = Router();

/**POST methods */

router.route("/register").post((req, res) => {
  //register user
  res.json("register post request");
});

router.route("/registerMail").post((req, res) => {
  //send the email to the user
  res.json("registerMail post request");
});

router.route("/authenticate").post((req, res) => {
  //authenticate the user
  res.json("authenticate post request");
});

router.route("/login").post((req, res) => {
  //login the user
  res.json("login post request");
});

/**GET methods */
router.route("/user/:username").get(); //get the user by username
router.route("/generateOTP").get(); //generate OTP
router.route("/verifyOTP").get(); //verify OTP
router.route("/createResetSession").get(); //create reset session

/**PUT methods */
router.route("/updateUser").put(); //update the user
router.route("/resetPassword").put(); //reset the password

/**export router */
export default router;
