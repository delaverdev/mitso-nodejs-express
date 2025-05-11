const users = [];
const getAll = async () => {
    return users;
};
const getById = async (id) => {
    return users.find((user) => user.id === id) || null;
};
const createUser = async (user) => {
    users.push(user);
    return user;
};
const updateUser = async (id, user) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1)
        return null;
    users[index] = { ...users[index], ...user };
    return users[index];
};
const deleteUser = async (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1)
        return null;
    const [user] = users.splice(index, 1);
    return user;
};
export default { getAll, getById, createUser, updateUser, deleteUser };
//# sourceMappingURL=user.memory.repository.js.map