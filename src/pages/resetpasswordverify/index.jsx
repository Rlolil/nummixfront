import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { verify, resetPassword, resendOtp } from "../../services";

function Toaster({ toasts, removeToast }) {
  return (
    <div className="fixed top-6 right-6 z-50 space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`max-w-sm w-full px-4 py-2 rounded-md shadow-md text-white ${
            t.type === "success"
              ? "bg-green-600"
              : t.type === "error"
              ? "bg-red-600"
              : "bg-gray-800"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm">{t.message}</div>
            <button
              onClick={() => removeToast(t.id)}
              className="ml-4 text-xs opacity-80 hover:opacity-100"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ResetPasswordVerify() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [toasts, setToasts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const addToast = (type, message, ttl = 3000) => {
    const id = Date.now() + Math.random();
    const t = { id, type, message };
    setToasts((s) => [t, ...s]);
    setTimeout(() => {
      setToasts((s) => s.filter((x) => x.id !== id));
    }, ttl);
  };
  const removeToast = (id) => {
    setToasts((s) => s.filter((x) => x.id !== id));
  };

  const handleDigitChange = (index, value) => {
    if (value.length <= 1) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
      if (value && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = digits.join("");
    if (otp.length !== 6) {
      addToast("error", t("auth.verify.enterCode"));
      return;
    }
    if (!email) {
      addToast("error", "Email not found. Please try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      await verify({ email, otp });
      setIsCodeVerified(true);
      addToast("success", t("auth.verify.success"));
    } catch (error) {
      console.error(error);
      addToast("error", t("auth.verify.invalid"));
    }
    setIsSubmitting(false);
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      addToast("error", t("auth.reset.mismatch"));
      return;
    }
    setIsSubmitting(true);
    try {
      const otp = digits.join("");
      await resetPassword({ email, otp, newPassword: password });
      addToast("success", t("auth.reset.successRedirect"));
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.error(error);
      addToast("error", "Failed to reset password");
    }
    setIsSubmitting(false);
  };

  const handleResend = async () => {
    if (!email) return;
    try {
      await resendOtp({ email });
      addToast("info", t("auth.verify.resent"));
      setDigits(["", "", "", "", "", ""]);
    } catch (error) {
      console.error(error);
      addToast("error", "Failed to resend OTP");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <Toaster toasts={toasts} removeToast={removeToast} />

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 sm:p-10 my-10 sm:my-20 space-y-6">
          <div className="text-center">
            <h2 className="text-black font-bold text-2xl sm:text-3xl">Nummix ERP</h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              {isCodeVerified
                ? t("auth.reset.enterNew")
                : t("auth.verify.subtitle")}
            </p>
          </div>

          {!isCodeVerified ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-6 gap-2 sm:gap-4">
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    id={`digit-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    className="h-12 sm:h-14 w-full rounded-full border border-gray-300 bg-white px-2 sm:px-3 text-center text-xl sm:text-2xl focus:outline-none focus:ring-2 focus:ring-black"
                    disabled={isSubmitting}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:bg-gray-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("auth.verify.submitting") : t("auth.verify.submit")}
                </button>
                <button
                  type="button"
                  onClick={handleResend}
                  className="px-4 py-3 border rounded-lg text-sm"
                  disabled={isSubmitting}
                >
                  {t("auth.verify.resend")}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">{t("auth.reset.newPassword")}</label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder={t("placeholders.newPassword")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t("auth.reset.confirmPassword")}</label>
                <input
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder={t("placeholders.confirmPassword")}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:bg-gray-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("auth.reset.submitting") : t("auth.reset.submit")}
              </button>
            </form>
          )}   
          <div className="space-y-4 text-center">
            <p className="text-gray-400 text-sm">
              {t("auth.common.noAccount")} {" "}
              <Link to="/register" className="text-black font-medium hover:underline">
                {t("auth.common.signUp")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordVerify;
