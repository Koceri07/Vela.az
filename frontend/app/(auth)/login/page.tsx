"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  onClose: () => void;
};

export default function LoginForm({ onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    // adi alert yox, Sweet Alert, ya da alternativini istifadə edin
    if (!storedUser) {
      alert("Belə bir istifadəçi tapılmadı!");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.email === email && parsedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Uğurla daxil oldunuz!");
      router.push("/user");
    } else {
      alert("Email və ya şifrə yanlışdır.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        {/* Səhifədir deyə X-ə ehtiyac yoxdur  */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Daxil olun</h2>

        <div className="mb-4">
          {/* E-maillə birlikdə telefon nömrəsi ilə də giriş mümkün olmalıdır */}
          <label htmlFor="email" className="block text-gray-700 mb-2">
            E-poçt ünvanı
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            placeholder="email ünvanı"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Şifrə
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            placeholder="Şifrə"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Daxil olun
        </button>

        <p className="text-sm text-center mt-4">
          Hesabınız yoxdur?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Hesab yaradın
          </Link>
        </p>
      </form>
    </div>
  );
}
