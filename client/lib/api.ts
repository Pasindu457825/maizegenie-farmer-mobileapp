// lib/api.ts
import axios from "axios";
import { getAuth } from "firebase/auth";

// 👇 Replace with your PC's LAN IP (find using ipconfig)
export const API_BASE = "http://192.168.1.4:8000"; 

// Helper to attach Firebase token when calling protected endpoints
export async function withAuthHeaders() {
  const user = getAuth().currentUser;
  const idToken = user ? await user.getIdToken() : "";
  return { Authorization: `Bearer ${idToken}` };
}

// Example: call /health (no auth needed)
export async function apiHealth() {
  const res = await axios.get(`${API_BASE}/health`);
  return res.data;
}

// Example: call /me (requires Firebase login)
export async function apiMe() {
  const headers = await withAuthHeaders();
  const res = await axios.get(`${API_BASE}/me`, { headers });
  return res.data;
}
