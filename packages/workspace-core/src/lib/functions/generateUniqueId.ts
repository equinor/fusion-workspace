/**
 * Internal Function for creating unique id
 */
export const generateUniqueId = (): string => {
    return (Math.random() * 16).toString();
};
