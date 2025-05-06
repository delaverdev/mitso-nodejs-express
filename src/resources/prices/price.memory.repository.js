import Price from './price.model.js';

let prices = [];

export async function getAll() {
  return prices;
}

export async function getById(id) {
  return prices.find(p => p.id === id);
}

export async function create(data) {
  const p = new Price(data);
  prices.push(p);
  return p;
}

export async function update(id, data) {
  const idx = prices.findIndex(p => p.id === id);
  if (idx === -1) return null;
  prices[idx] = { ...prices[idx], ...data };
  return prices[idx];
}

export async function remove(id) {
  const idx = prices.findIndex(p => p.id === id);
  if (idx === -1) return false;
  prices.splice(idx, 1);
  return true;
}

export async function removeByScheduleId(scheduleId) {
  prices = prices.filter(p => p.scheduleId !== scheduleId);
}