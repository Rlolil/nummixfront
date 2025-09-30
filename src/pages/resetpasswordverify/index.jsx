import { useState } from "react";
import { Link } from "react-router";

function ResetPasswordVerify() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  let total;
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    total = first + second + third + fourth;
    console.log(String(total));
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  }
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="rounded-2xl shadow-2xl border border-gray-200 p-10 mt-20 max-w-[500px] mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-[black] font-bold text-[26px]">Nummix ERP</h2>
          <p className="text-gray-600">
            Write the verification code we sent to your email
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label className="text-sm font-medium text-gray-700"></label>
              <div className="grid grid-cols-4 gap-8 mt-2">
                <input
                  type="text"
                  maxLength={1}
                  onChange={(e) => setFirst(e.target.value)}
                  className="flex h-14 w-full rounded-full text-4xl border border-input bg-background px-3 text-center py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input
                  type="text"
                  maxLength={1}
                  onChange={(e) => setSecond(e.target.value)}
                  className="flex h-14 w-full rounded-full text-4xl border border-input bg-background px-3 text-center py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input
                  type="text"
                  maxLength={1}
                  onChange={(e) => setThird(e.target.value)}
                  className="flex h-14 w-full rounded-full text-4xl border border-input bg-background px-3 text-center py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input
                  type="text"
                  maxLength={1}
                  onChange={(e) => setFourth(e.target.value)}
                  className="flex h-14 w-full rounded-full text-4xl border border-input bg-background px-3 text-center py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[black] text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition"
                style={{ backgroundColor: isSubmitting ? "gray" : "black" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Reset Password"}
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-4">
          <p className="text-center text-gray-400">
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

export default ResetPasswordVerify;
