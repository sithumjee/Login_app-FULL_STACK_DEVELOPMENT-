import toast from "react-hot-toast";

/**validate login page username and password */

export async function accountValidate(values) {
  const error = accountVerify({}, values);

  return error;
}

export async function passwordValidate(values) {
  const error = passwordVerify({}, values);

  return error;
}

/** validate reset password*/

export async function resetValidate(values) {
  const error = passwordVerify({}, values);

  if (values.password !== values.confPs) {
    error.confPs = toast.error("Password does not match");
  }
  return error;
}

/**=================================================== */

/**validate username and password */

function accountVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username is required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Username is invalid");
  }

  return error;
}

function passwordVerify(error = {}, values) {
  const specialChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (!values.password) {
    error.password = toast.error("Password is required");
  } else if (values.password.includes(" ")) {
    error.username = toast.error("Password is invalid");
  } else if (values.password.length < 6) {
    error.password = toast.error("Password is less than 6 characters");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must contain a special character");
  }

  return error;
}
