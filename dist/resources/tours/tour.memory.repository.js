const tours = [];
const getAll = async () => {
    return tours;
};
const getById = async (id) => {
    return tours.find((tour) => tour.id === id) || null;
};
const createTour = async (tour) => {
    tours.push(tour);
    return tour;
};
const updateTour = async (id, tour) => {
    const index = tours.findIndex((t) => t.id === id);
    if (index === -1)
        return null;
    tours[index] = { ...tours[index], ...tour };
    return tours[index];
};
const deleteTour = async (id) => {
    const index = tours.findIndex((tour) => tour.id === id);
    if (index === -1)
        return null;
    const [tour] = tours.splice(index, 1);
    return tour;
};
export default { getAll, getById, createTour, updateTour, deleteTour };
//# sourceMappingURL=tour.memory.repository.js.map