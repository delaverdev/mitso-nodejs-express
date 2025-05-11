const schedules = [];
const getAll = async () => {
    return schedules;
};
const getById = async (id) => {
    return schedules.find((schedule) => schedule.id === id) || null;
};
const createSchedule = async (schedule) => {
    schedules.push(schedule);
    return schedule;
};
const updateSchedule = async (id, schedule) => {
    const index = schedules.findIndex((s) => s.id === id);
    if (index === -1)
        return null;
    schedules[index] = { ...schedules[index], ...schedule };
    return schedules[index];
};
const deleteSchedule = async (id) => {
    const index = schedules.findIndex((schedule) => schedule.id === id);
    if (index === -1)
        return null;
    const [schedule] = schedules.splice(index, 1);
    return schedule;
};
export default { getAll, getById, createSchedule, updateSchedule, deleteSchedule };
//# sourceMappingURL=schedule.memory.repository.js.map