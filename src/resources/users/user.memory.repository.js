const users = [];

export async function getAll() {
  return users;
}

export async function getById(id) {
  return users.find(u => u.id === id);
}

export async function create(data) {
  users.push(data);
  return data;
}

export async function update(id, newData) {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...newData };
  return users[idx];
}

export async function remove(id) {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return false;
  users.splice(idx, 1);
  return true;
}