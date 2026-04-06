import type { SessionUser } from "./types";

const SESSION_KEY = "vela-session-user";
const ACCESS_TOKEN_KEY = "vela-access-token";
const REFRESH_TOKEN_KEY = "vela-refresh-token";

export function getSessionUser(): SessionUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function setSessionUser(user: SessionUser) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  if (user.token) {
    window.localStorage.setItem(ACCESS_TOKEN_KEY, user.token);
  }
  if (user.refreshToken) {
    window.localStorage.setItem(REFRESH_TOKEN_KEY, user.refreshToken);
  }
  window.localStorage.setItem("isLoggedIn", "true");
  window.localStorage.setItem(
    "user",
    JSON.stringify({
      id: user.id,
      fullName: user.username,
      email: user.email,
      role: user.role,
    }),
  );
}

export function clearSessionUser() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.localStorage.removeItem("user");
  window.localStorage.setItem("isLoggedIn", "false");
}

export function getAccessToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(REFRESH_TOKEN_KEY);
}
