// src/store/candidates.js
const KEY = "winterns:candidates";

export function getCandidates() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function addCandidate(candidate) {
  const list = getCandidates();
  const withMeta = {
    id: (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : String(Date.now()),
    createdAt: Date.now(),
    ...candidate,
  };
  list.push(withMeta);
  localStorage.setItem(KEY, JSON.stringify(list));
  return withMeta;
}
