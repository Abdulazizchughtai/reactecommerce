import React, { useState } from "react";
import { getAuth, updateProfile, updateEmail, sendEmailVerification } from "firebase/auth";

function Profile() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setMessage("No user is currently logged in.");
      return;
    }

    try {
      if (email) {
       
        if (!user.emailVerified) {
          setMessage("Please verify your current email before updating it.");
          return;
        }

        await updateEmail(user, email);
      }

      if (fullName) {
        await updateProfile(user, {
          displayName: fullName,
        });
      }

      setMessage("✅ Profile updated successfully!");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

 
  const handleSendVerification = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setMessage("No user is logged in.");
      return;
    }

    try {
      await sendEmailVerification(user);
      setMessage("📧 Verification email sent. Please check your inbox.");
    } catch (error) {
      setMessage(`❌ Error sending verification email: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#000300] px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-[#00df9a]">Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="New Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
          />
          <input
            type="email"
            placeholder="New Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#00df9a] text-black font-semibold rounded-md hover:opacity-90 transition"
          >
            Save Changes
          </button>

        
          <button
            type="button"
            onClick={handleSendVerification}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:opacity-90 transition mt-2"
          >
            Send Verification Email
          </button>

          {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Profile;
