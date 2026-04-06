"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clearSessionUser, getSessionUser } from "@/lib/api/session";
import { getApiErrorMessage, getUserById, logout } from "@/lib/api/client";

interface UserState {
  username: string;
  email: string;
  role: string;
}

export default function UserPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserState | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const session = getSessionUser();
    if (!session) {
      router.push("/login");
      return;
    }

    void getUserById(session.id)
      .then((nextUser) =>
        setUser({
          username: nextUser.username,
          email: nextUser.email,
          role: nextUser.role,
        }),
      )
      .catch((loadError) => setError(getApiErrorMessage(loadError, "Profil yüklənmədi.")));
  }, [router]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch {}
    clearSessionUser();
    router.push("/");
  };

  if (!user && !error) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {error ? (
        <p className="mb-4 text-red-500">{error}</p>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Xoş gəlmisiniz, {user?.username}!</h1>
          <p className="text-lg mb-2">E-poçtunuz: {user?.email}</p>
          <p className="text-lg mb-6">Rolunuz: {user?.role}</p>
        </>
      )}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Çıxış
      </button>
    </div>
  );
}
