import * as repo from './price.memory.repository.js';

export async function getAll() {
  return repo.getAll();
}

export async function getById(id) {
  const p = await repo.getById(id);
  if (!p) throw { status: 404, message: 'Price not found' };
  return p;
}

export async function create(data) {
  if (!data.scheduleId || data.amount == null || !data.currency) {
    throw { status: 400, message: 'Invalid price data' };
  }
  return repo.create(data);
}

export async function update(id, data) {
  const p = await repo.update(id, data);
  if (!p) throw { status: 404, message: 'Price not found' };
  return p;
}

export async function remove(id) {
  if (!(await repo.remove(id))) {
    throw { status: 404, message: 'Price not found' };
  }
}