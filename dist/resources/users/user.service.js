import repo from './user.memory.repository.js';
import User from './user.model.js';
export async function getAll() {
    const all = await repo.getAll();
    return all.map(User.toResponse);
}
export async function getById(id) {
    const u = await repo.getById(id);
    if (!u) {
        throw { status: 404, message: 'User not found' };
    }
    return User.toResponse(u);
}
export async function create(data) {
    if (!data.name || !data.login || !data.password) {
        throw { status: 400, message: 'Missing required fields' };
    }
    const u = new User(data);
    await repo.createUser(u);
    return User.toResponse(u);
}
export async function update(id, data) {
    const u = await repo.updateUser(id, data);
    if (!u) {
        throw { status: 404, message: 'User not found' };
    }
    return User.toResponse(u);
}
export async function remove(id) {
    if (!(await repo.deleteUser(id))) {
        throw { status: 404, message: 'User not found' };
    }
}
//# sourceMappingURL=user.service.js.map