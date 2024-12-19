"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useRouter();
  return (
    <div>
      {auth ? (
        <button
          className="px-4 py-2 bg-white/5 rounded-lg"
          onClick={() => setAuth(null)}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-white/5 rounded-lg"
          onClick={() => navigate.push("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
