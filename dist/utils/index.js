import { v4 as uuidv4 } from 'uuid';
export const generateId = () => {
    return uuidv4();
};
export const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};
export const formatTime = (date) => {
    return date.toTimeString().split(' ')[0];
};
export const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    }).format(amount);
};
//# sourceMappingURL=index.js.map