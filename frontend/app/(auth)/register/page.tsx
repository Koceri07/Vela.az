"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!acceptTerms) {
      alert("Davam etmək üçün Şərtlər və Qaydaları qəbul etməlisiniz.");
      return;
    }

    const userData = {
      fullName,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    alert("Təbriklər! Qeydiyyatınız uğurla tamamlandı.");
    router.push("/user");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <button
          type="button"
          onClick={() => router.push("/")}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Bağla"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Hesab yaradın</h2>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 mb-2">
            Ad və soyad
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            E-poçt ünvanı
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Şifrə
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="acceptTerms" className="text-gray-700 text-sm">
            Şərtlər və Qaydaları qəbul edirəm.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Hesab yaradın
        </button>

        <p className="text-sm text-center mt-4">
          Artıq hesabınız var?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Daxil olun
          </Link>
        </p>
      </form>
    </div>
  );
}
