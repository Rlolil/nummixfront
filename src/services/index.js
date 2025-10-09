import { api } from "../api";

export const register = async (data) => {
  const res = await api.post("/api/users/register", data);
  if (res.status === 201) {
    console.log(res.data);
    return res.data;
  } else {
    throw new Error("Registration failed");
  }
};
export const verify = async (data) => {
  const res = await api.post("/api/users/verify-otp", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Verification failed");
  }
};
export const login = async (data) => {
  const res = await api.post("/api/users/login", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Login failed");
  }
};
export const resendOtp = async (data) => {
  const res = await api.post("/api/users/resend-otp", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Resend OTP failed");
  }
};
export const forgotPassword = async (data) => {
  const res = await api.post("/api/users/forgot-password", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Forgot Password failed");
  }
};
export const resetPassword = async (data) => {
  const res = await api.post("/api/users/reset-password", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Reset Password failed");
  }
}
