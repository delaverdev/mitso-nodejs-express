import Tour from './tour.model.js';

const tours = [];

export async function getAll() {
  return tours;
}

export async function getById(id) {
  return tours.find(t => t.id === id);
}

export async function create(data) {
  const t = new Tour(data);
  tours.push(t);
  return t;
}

export async function update(id, data) {
  const idx = tours.findIndex(t => t.id === id);
  if (idx === -1) return null;
  tours[idx] = { ...tours[idx], ...data };
  return tours[idx];
}

export async function remove(id) {
  const idx = tours.findIndex(t => t.id === id);
  if (idx === -1) return false;
  tours.splice(idx, 1);
  return true;
}