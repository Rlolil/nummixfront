import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verify, register as registerUser, register, resendOtp } from "../../services"; // register fonksiyonunu import et

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

function Register() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState("form");
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const [toasts, setToasts] = useState([]);
  const [userId, setUserId] = useState("");

  const addToast = (type, message, ttl = 3000) => {
    const id = Date.now() + Math.random();
    const t = { id, type, message };
    setToasts((s) => [t, ...s]);
    setTimeout(() => {
      setToasts((s) => s.filter((x) => x.id !== id));
    }, ttl);
  };

  const removeToast = (id) => setToasts((s) => s.filter((x) => x.id !== id));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Önce register backend çağrısı
      const data = await register({ fullName, companyName, email, password });
      console.log(data);
      
      console.log("Registration initiated:", setUserId(data._id));
      setStep("verify");
      addToast("info", "6 haneli doğrulama kodu e-posta adresinize gönderildi.");
    } catch (err) {
      console.error(err);
      addToast("error", "Kayıt sırasında bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDigitChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
      if (value && index < 5) {
        const next = document.getElementById(`digit-${index + 1}`);
        if (next) next.focus();
      }
    }
  };

  const handleDigitKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      const prev = document.getElementById(`digit-${index - 1}`);
      if (prev) prev.focus();
    }
  };

  const otp = digits.join("");

  const handleVerify = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      addToast("error", "Lütfen 6 haneli kodu girin.");
      return;
    }

    setIsSubmitting(true);
    try {
      const isValid = await verify({ userId, otp });
      if (isValid) {
        addToast("success", "Doğrulama başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
        setTimeout(() => navigate("/login"), 700);
      } else {
        addToast("error", "Kod yanlış. Lütfen tekrar deneyin.");
      }
    } catch (err) {
      console.error(err);
      addToast("error", "Doğrulama sırasında bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <Toaster toasts={toasts} removeToast={removeToast} />
      <div className="rounded-2xl shadow-2xl border border-gray-200 p-10 max-w-md w-full space-y-6 bg-white">
        <div className="text-center">
          <h2 className="text-black font-bold text-2xl">Join Nummix ERP</h2>
          <p className="text-gray-600 mt-1">
            {step === "form"
              ? "Create your financial management account"
              : "Enter the 6-digit verification code sent to your email"}
          </p>
        </div>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                required
                type="text"
                name="fullname"
                className="mt-1 block w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            {/* Company Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">Company Name</label>
              <input
                required
                type="text"
                name="company"
                className="mt-1 block w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                required
                type="email"
                name="email"
                className="mt-1 block w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                required
                type="password"
                name="password"
                className="mt-1 block w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:bg-gray-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6 mt-4">
            <div className="grid grid-cols-6 gap-2">
              {digits.map((digit, index) => (
                <input
                  key={index}
                  id={`digit-${index}`}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleDigitChange(index, e.target.value.replace(/\D/, ""))
                  }
                  onKeyDown={(e) => handleDigitKeyDown(index, e)}
                  className="h-12 w-full rounded-full border border-gray-300 text-center text-xl focus:outline-none focus:ring-2 focus:ring-black"
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
                {isSubmitting ? "Verifying..." : "Verify Code"}
              </button>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await resendOtp({ userId });
                    addToast("success", "A new verification code has been sent to your email.");
                  } catch (err) {
                    addToast("error", "Failed to resend verification code.");
                  }
                }}
                className="px-4 py-3 border rounded-lg text-sm"
                disabled={isSubmitting}
              >
                Resend
              </button>
            </div>
          </form>
        )}

        <div>
          <p className="text-center text-gray-400">
            You have an account?{" "}
            <Link to="/login" className="text-black font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
