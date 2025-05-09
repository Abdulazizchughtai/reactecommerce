import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Footer from "../components/Footer";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account Created!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Account Logged in!");
      }

      navigate("/"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#000300] px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l-md transition ${
              isSignUp ? "bg-[#00df9a] text-black" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r-md transition ${
              !isSignUp ? "bg-[#00df9a] text-black" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#00df9a] text-black font-semibold rounded-md hover:opacity-90 transition"
          >
            {isSignUp ? "Create Account" : "Log In"}
          </button>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>

        {!isSignUp && (
          <p className="mt-4 text-sm text-center text-gray-600">
            Forgot your password?{" "}
            <a href="#" className="text-[#00df9a] hover:underline">
              Reset here
            </a>
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
