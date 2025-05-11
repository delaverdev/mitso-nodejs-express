import { User } from '../models/index.js';
import { generateId } from '../utils/index.js';
export class UserRepository {
    constructor() {
        this.users = [];
    }
    async getAll() {
        return this.users;
    }
    async getById(id) {
        return this.users.find(user => user.id === id) || null;
    }
    async create(user) {
        const newUser = new User({
            ...user,
            id: generateId()
        });
        this.users.push(newUser);
        return newUser;
    }
    async update(id, user) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) {
            return null;
        }
        this.users[index] = user;
        return user;
    }
    async remove(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return null;
        }
        const [removedUser] = this.users.splice(index, 1);
        return removedUser;
    }
}
//# sourceMappingURL=user.repository.js.map