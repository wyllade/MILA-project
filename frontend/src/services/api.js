const TOKEN_KEY = "token";
const USERNAME_KEY = "username";

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function getUsername() {
  return localStorage.getItem(USERNAME_KEY);
}

function setUsername(name) {
  localStorage.setItem(USERNAME_KEY, name);
}

function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USERNAME_KEY);
}

async function request(url, options = {}) {
  const token = getToken();
  const headers = { ...options.headers };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  let res;
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 15000);
    res = await fetch(url, { ...options, headers, signal: controller.signal });
    clearTimeout(id);
  } catch (e) {
    if (e.name === "AbortError") throw new Error("Request timed out");
    throw new Error("Network error — is the backend running?");
  }
  if (res.status === 401) {
    clearAuth();
    window.location.href = "/login";
    throw new Error("Unauthorized");
  }
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  }
  const text = await res.text();
  throw new Error(`Unexpected response (${res.status}): ${text.slice(0, 100)}`);
}

export async function login(username, password) {
  const data = await request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  if (data.access_token) {
    setToken(data.access_token);
    setUsername(data.user.username);
  }
  return data;
}

export async function signup(username, email, password) {
  const data = await request("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
  });
  return data;
}

export async function getCultures() {
  return request("/api/cultures/");
}

export async function getCultureById(id) {
  return request(`/api/cultures/${id}`);
}

export async function getProfile() {
  return request("/api/user/profile");
}

export async function getProgress() {
  return request("/api/user/progress");
}

export async function getFavorites() {
  return request("/api/user/favorites");
}

export async function addFavorite(type, externalId) {
  return request("/api/user/favorites", {
    method: "POST",
    body: JSON.stringify({ type, external_id: externalId }),
  });
}

export async function removeFavorite(id) {
  return request(`/api/user/favorites?id=${id}`, { method: "DELETE" });
}

export async function updateProgress(cultureId, topic, completed) {
  return request("/api/user/progress", {
    method: "POST",
    body: JSON.stringify({ culture_id: cultureId, topic, completed }),
  });
}

export function isAuthenticated() {
  return !!getToken();
}

export function logout() {
  clearAuth();
}

export { getToken, getUsername, setUsername, clearAuth };
