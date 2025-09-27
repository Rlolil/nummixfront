import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="rounded-2xl shadow-2xl border border-gray-200 p-10 mt-20 max-w-[500px] mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-[black] font-bold text-[26px]">Nummix.az</h2>
          <p className="text-gray-600">
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
              <p className="text-center text-gray-400 mr-[190px] mt-[10px]">
                Forgot your password?{" "}
                <Link to="/reset-password" className="text-black  font-medium">
                  Reset it
                </Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition"
                style={{ backgroundColor: isSubmitting ? "gray" : "black" }}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-4">
          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-black  font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
