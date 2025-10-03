import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../../services";
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

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toasts, setToasts] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
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

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);
  let timeout = 0;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      addToast("error", "Please enter both email and password!");
      return;
    }
    setIsSubmitting(true);
    try {
      const data = await login({ email, password });
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      setIsSubmitting(false);
      setIsLogin(true);
      setTimeout(() => navigate("/dashboard"), 1000);
      addToast("success", "Login successful! Redirecting...");
    } catch (err) {
      setIsSubmitting(false);
      navigate("/login");
      addToast("error", "Invalid email or password!");
      timeout++;
      throw new Error("Login failed");
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
      <Toaster toasts={toasts} removeToast={removeToast} />

      <div className="rounded-2xl shadow-2xl border border-gray-200 p-6 sm:p-10 mt-10 sm:mt-20 max-w-[500px] mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-[black] font-bold text-xl sm:text-2xl md:text-[26px]">
            Nummix.az
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Sign in to your financial management dashboard
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="Enter your password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <p className="text-gray-400 text-left text-sm mt-2 sm:mt-[10px] sm:mr-0">
                Forgot your password?{" "}
                <Link to="/reset-password" className="text-black font-medium">
                  Reset it
                </Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition text-sm sm:text-base"
                style={{ backgroundColor: isSubmitting ? "gray" : "black" }}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-4">
          <p className="text-center text-gray-400 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link to="/register" className="text-black font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
