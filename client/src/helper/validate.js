import toast from "react-hot-toast";

/**validate login page username and password */

export async function accountValidate(values) {
  const error = accountVertify({}, values);

  return error;
}

/**validate username and password */

function accountVertify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username is required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Username is invalid");
  }

  if (!values.password) {
    error.password = toast.error("Password is required");
  } else if (values.password.includes(" ")) {
    error.username = toast.error("Password is invalid");
  }

  return error;
}
