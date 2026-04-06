"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getApiErrorMessage, registerBuyer } from "@/lib/api/client";

type Props = {
  onClose?: () => void;
};

export default function RegisterForm({ onClose }: Props) {
  const [businessName, setBusinessName] = useState("");
  const [businessSector, setBusinessSector] = useState("General");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!acceptTerms) {
      setError("Şərtlər və qaydaları qəbul etməlisiniz.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Şifrələr eyni deyil.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      setSuccess("");

      const result = await registerBuyer({
        businessName,
        businessSector,
        email,
        password,
        confirmPassword,
      });

      setSuccess(`Qeydiyyat tamamlandı. Rol: ${result.role}`);

      setTimeout(() => {
        if (onClose) {
          onClose();
        }
        router.push("/login");
      }, 1200);
    } catch (submitError) {
      setError(getApiErrorMessage(submitError, "Qeydiyyat alınmadı."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <button
          type="button"
          onClick={() => (onClose ? onClose() : router.push("/"))}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Bağla"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Hesab yaradın</h2>

        <div className="mb-4">
          <label htmlFor="businessName" className="block text-gray-700 mb-2">
            Ad və ya business name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="businessSector" className="block text-gray-700 mb-2">
            Sektor
          </label>
          <input
            id="businessSector"
            name="businessSector"
            type="text"
            value={businessSector}
            onChange={(e) => setBusinessSector(e.target.value)}
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

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Şifrəni təsdiqlə
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Şərtlər və qaydaları qəbul edirəm.
          </label>
        </div>

        {error ? <p className="mb-4 text-sm text-red-500">{error}</p> : null}
        {success ? <p className="mb-4 text-sm text-green-600">{success}</p> : null}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-60"
        >
          {submitting ? "Göndərilir..." : "Hesab yaradın"}
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
