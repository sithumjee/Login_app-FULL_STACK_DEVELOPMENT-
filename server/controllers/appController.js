/** POST:http://localhost:8080/api/register
 * @param:{
 * "username":"example123",
 * "password":"admin@123",
 * "email":"example@gmail.com"
 * firstName:"sithum",
 * lastName:"jeevantha"
 * mobile:"0711663875"}
 * address":"'jayasiri',Ambegoda,Diganathenna,Bandarawela,Sri Lanka",
 * profile:""
 * }
 *
 */

export async function register(req, res) {
  //register user
  res.json("register route");
}

/**============================================================= */

/** POST:http://localhost:8080/api/login
 * @param:{
 * "username":"example123",
 * "password":"admin@123",
 * }
 */

export async function login(req, res) {
  res.json("login route");
}

/**============================================================= */

/** GET:http://localhost:8080/api/user/:username*/

export async function getUser(req, res) {
  res.json("getUser route");
}

/**============================================================= */

/** PUT:http://localhost:8080/api/updateuser
 * @param:{
 * id:"<user id>",
 * }
 * body:{
 * firstName:"",
 * address:"",
 * profile:""
 * }
 */
export async function updateUser(req, res) {
  res.json("updateUser route");
}

/**============================================================= */

/** GET:http://localhost:8080/api/generateOTP*/
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

/**============================================================= */

/** GET:http://localhost:8080/api/verifyOTP*/
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

/**============================================================= */
//successfully redirect the user when OTP is valid

/** GET:http://localhost:8080/api/createResetSession*/
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

/**============================================================= */
//update the password when we have valid session

/** PUT:http://localhost:8080/api/resetPassword*/
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
