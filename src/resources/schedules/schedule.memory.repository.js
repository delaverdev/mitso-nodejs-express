import Schedule from './schedule.model.js';

const schedules = [];

export async function getAll() {
  return schedules;
}

export async function getById(id) {
  return schedules.find(s => s.id === id);
}

export async function create(data) {
  const s = new Schedule(data);
  schedules.push(s);
  return s;
}

export async function update(id, data) {
  const idx = schedules.findIndex(s => s.id === id);
  if (idx === -1) return null;
  schedules[idx] = { ...schedules[idx], ...data };
  return schedules[idx];
}

export async function remove(id) {
  const idx = schedules.findIndex(s => s.id === id);
  if (idx === -1) return false;
  schedules.splice(idx, 1);
  return true;
}