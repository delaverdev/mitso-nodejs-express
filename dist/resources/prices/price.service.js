import repo from './price.memory.repository.js';
export async function getAll() {
    return repo.getAll();
}
export async function getById(id) {
    const p = await repo.getById(id);
    if (!p) {
        throw { status: 404, message: 'Price not found' };
    }
    return p;
}
export async function create(data) {
    if (!data.scheduleId || !data.price || !data.currency) {
        throw { status: 400, message: 'Missing required fields' };
    }
    return repo.createPrice(data);
}
export async function update(id, data) {
    const p = await repo.updatePrice(id, data);
    if (!p) {
        throw { status: 404, message: 'Price not found' };
    }
    return p;
}
export async function remove(id) {
    if (!(await repo.deletePrice(id))) {
        throw { status: 404, message: 'Price not found' };
    }
}
//# sourceMappingURL=price.service.js.map