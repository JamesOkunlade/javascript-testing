const ceasar = require('./ceasar');
test('converts a single word', () => {
    expect(ceasar('hello')).toBe('khoor');
});
test('converts a sentence', () => {
    expect(ceasar('hello world')).toBe('khoor zruog');
});
test('converts a sentence with punctuation', () => {
    expect(ceasar('hello, world')).toBe('khoor, zruog');
});
