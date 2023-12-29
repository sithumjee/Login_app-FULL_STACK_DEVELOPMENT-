import toast from "react-hot-toast";
const specialChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const specialCharsSecond = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const emailRegex = /\S+@\S+\.\S+/;
/**=============================================================================================================== */

/**validate login page username and password */

export async function accountValidate(values) {
  const error = accountVerify({}, values);

  return error;
}

/**validate username and password */

function accountVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username is required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Username is invalid");
  }

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

/**================================================================================================================================= */
export async function passwordValidate(values) {
  const error = passwordVerify({}, values);

  return error;
}

function passwordVerify(error = {}, values) {
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

/**================================================================================================================================= */
/** validate reset password*/

export async function resetValidate(values) {
  const error = passwordVerify({}, values);
  if (values.password !== values.confPs) {
    error.confPs = toast.error("Password does not match");
  }
  return error;
}

/**================================================================================================================================= */
/**validate register */

export async function registerValidate(values) {
  const error = accountVerify({}, values);
  passwordVerify(error, values);
  emailVerify(error, values);
  return error;
}

/**validate email */

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email is required");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Email is invalid");
  } else if (!emailRegex.test(values.email)) {
    error.email = toast.error("Email is invalid");
  }

  return error;
}

/**============================================================================== */

/**validate profile */

export async function profileValidate(values) {
  const error = profileVerify({}, values);

  return error;
}

/**validate profile */

function profileVerify(error = {}, values) {
  if (!values.firstName) {
    error.firstName = toast.error("FirstName is required");
  } else if (specialCharsSecond.test(values.firstName)) {
    error.firstName = toast.error(
      "FirstName can't contain a special character"
    );
  }

  if (!values.lastName) {
    error.lastName = toast.error("LastName is required");
  } else if (specialCharsSecond.test(values.lastName)) {
    error.lastName = toast.error("LastName can't contain a special character");
  }

  if (!values.mobileNumber) {
    error.mobileNumber = toast.error("MobileNumber is required");
  } else if (values.mobileNumber.includes(" ")) {
    error.mobileNumber = toast.error("MobileNumber is invalid");
  } else if (
    values.mobileNumber.length < 10 ||
    values.mobileNumber.length > 10
  ) {
    error.mobileNumber = toast.error("MobileNumber is invalid");
  }

  if (!values.address) {
    error.address = toast.error("Address is required");
  } else if (specialChars.test(values.lastName)) {
    error.lastName = toast.error("LastName can't contain a special character");
  }

  if (!values.email) {
    error.email = toast.error("Email is required");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Email is invalid");
  } else if (!emailRegex.test(values.email)) {
    error.email = toast.error("Email is invalid");
  }

  return error;
}
