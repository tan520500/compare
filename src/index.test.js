import compare from './index'


const obj1 = {
    a:1,
    b:"xyz"
};
const obj2 = {
    b:"xyz"
}
test('compare obj1 and obj2', () => {
    expect(compare(obj1, obj2)).toBe(3);
  });