const KEY = "winterns:candidates";

export function getCandidates(){
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCandidate(candidate){
  const list = getCandidates();
  const entry = { ...candidate, createdAt: new Date().toISOString() };
  const next = [entry, ...list];
  localStorage.setItem(KEY, JSON.stringify(next));
  return entry;
}
