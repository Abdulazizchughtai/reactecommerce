// components/ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);

  if (checking) return <div>Loading...</div>;

  if (!user) return <div className="text-center text-xl mt-10 text-red-600">🔒 Please log in first to access this page.</div>;

  return children;
};

export default ProtectedRoute;
