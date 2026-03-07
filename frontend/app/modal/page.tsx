"use client";
import { useState } from "react";
import RegisterForm from "../(auth)/register/page";
import LoginForm from "../(auth)/login/page";

export default function HomePage() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setShowRegister(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        Open Register Form
      </button>

      <button
        onClick={() => setShowLogin(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Open Login Form
      </button>
      {/* Modallar üçün ayrı component yarat. Page-lərlə dizaynları fərqli olacaq */}
      {showRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <RegisterForm onClose={() => setShowRegister(false)} />
        </div>
      )}

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <LoginForm onClose={() => setShowLogin(false)} />
        </div>
      )}
    </div>
  );
}
