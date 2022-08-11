/**
 * Function for generating a unique id
 */
export const generateUniqueId = (): string => {
	return (Math.random() * 16).toString();
};
