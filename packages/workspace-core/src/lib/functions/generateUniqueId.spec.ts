import { generateUniqueId } from './generateUniqueId';

describe('generateUniqueId', () => {
    const string = generateUniqueId();
    it('should generate string', () => {
        expect(typeof string).toBe('string');
    });
    it('should be length 17', () => {
        const string = generateUniqueId();
        expect(string.length).toBe(17);
    });
});
