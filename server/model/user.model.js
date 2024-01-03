import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  profile: { type: String },
  mobileNumber: { type: Number },
  otp: { type: Number },
  otpVerified: { type: Boolean },
  username: {
    type: [String, "Please provide a unique username"],
    required: [true, "username already exists"],
  },
  email: {
    type: [String, "Please provide a unique email"],
    required: true,
  },
  password: {
    type: [String, "Please provide a password"],
    required: false,
  },
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
