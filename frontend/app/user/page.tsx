"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  

interface User {
  fullName: string;
  email: string;
}
export default function UserPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = localStorage.getItem("user");
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (!storedUser || isLoggedIn !== "true") {
        router.push("/login");
        return;
      }

      setUser(JSON.parse(storedUser));
    };

    fetchUser();
  }, [router]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Xoş gəlmisiniz, {user.fullName}!
      </h1>
      <p className="text-lg mb-6">E-poçtunuz: {user.email}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Çıxış
      </button>
    </div>
  );
}
