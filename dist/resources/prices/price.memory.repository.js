let prices = [];
const getAll = async () => {
    return prices;
};
const getById = async (id) => {
    return prices.find((price) => price.id === id) || null;
};
const createPrice = async (price) => {
    prices.push(price);
    return price;
};
const updatePrice = async (id, price) => {
    const index = prices.findIndex((p) => p.id === id);
    if (index === -1)
        return null;
    prices[index] = { ...prices[index], ...price };
    return prices[index];
};
const deletePrice = async (id) => {
    const index = prices.findIndex((price) => price.id === id);
    if (index === -1)
        return null;
    const [price] = prices.splice(index, 1);
    return price;
};
const removeByScheduleId = async (scheduleId) => {
    prices = prices.filter(p => p.scheduleId !== scheduleId);
};
export default { getAll, getById, createPrice, updatePrice, deletePrice, removeByScheduleId };
//# sourceMappingURL=price.memory.repository.js.map