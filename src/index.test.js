import { compare,isContain,isObject } from './index.js'

//============== compare test start ===================

//compare test1
const source1= {a:2,b:3,c:[{item:23}]};
const target1 = { b: 3, c: [{ item: 23 }] };
test('compare source1 and target1', () => {
    expect(compare(source1, target1)).toBe(true);
});


//compare test2--简单比较：
const source2= {id:1,name:'test',updatedAt:'now'};
const target2_1= {name:'test'};
const target2_2 = { name: 'anotherTest' };
test('compare source2 and target2_1 => true;source2 and target2_2 => false;', () => {
    expect(compare(source2, target2_1)).toBe(true);
    expect(compare(source2, target2_2)).toBe(false);
});

//compare test3-深度比较：
const source3 = {
    id: 1,
    name: 'test',
    product: {
        id: 1,
        name: 'product'
    },
    updatedAt: 'now'
};
const target3_1 = {
    name: 'test',
    product: {
        name: 'product'
    }
};
const target3_2 = {
    name: 'test',
    product: {
        name: 'anotherProduct'
    }
};
test('compare source3 and target3_1 => true;source3 and target3_2 => false;', () => {
    expect(compare(source3, target3_1)).toBe(true);
    expect(compare(source3, target3_2)).toBe(false);
});


//compare test3.1--比较数组:
const array = [{
    id: 1,
    name: 'test',
    product: {
        id: 1,
        name: 'product'
    },
    updatedAt: 'now'
}];
const arrayA = [{
    name: 'test',
    product: {
        name: 'product'
    }
}];
const arrayB = [{
    name: 'test',
    product: {
        name: 'anotherProduct'
    }
}];
test('compare array and arrayA => true;array and arrayB => false;', () => {
    expect(compare(array, arrayA)).toBe(true);
    expect(compare(array, arrayB)).toBe(false);
});

//compare test4--Object 中嵌套 Array：
const source4 = {
    id: 1,
    name: 'test',
    products: [{
        id: 1,
        name: 'product'
    }],
    updatedAt: 'now'
};
const target4_1 = {
    name: 'test',
    products: [{
        name: 'product'
    }]
};
const target4_2 = {
    name: 'test',
    products: [{
        name: 'anotherProduct'
    }]
};
test('compare source4 and target4_1 => true;source4 and target4_2 => false;', () => {
    expect(compare(source4, target4_1)).toBe(true);
    expect(compare(source4, target4_2)).toBe(false);
});

//============== compare test end ===================


//============== isContain test start ===================

//isContain test1：
const bigArr1 = [1, 2, 3];
const smallArr1_1 = [1, 3];
const smallArr1_2 = [1,3,4];
test('compare bigArr1 and smallArr1_1 => true;bigArr1 and smallArr1_2 => false;', () => {
    expect(isContain(bigArr1, smallArr1_1)).toBe(true);
    expect(isContain(bigArr1, smallArr1_2)).toBe(false);
});
//============== isContain test end =====================



//============== isObject test start ===================
//isContain test1：
const obj1 = {name:'arrObj',arr:[1, 2, 3]};
const obj2 = null;
const obj3 = 'abcd';
test('input obj1 => true;obj2 => false;obj3 => false;', () => {
    expect(isObject(obj1)).toBe(true);
    expect(isObject(obj2)).not.toBe(true);
    expect(isObject(obj3)).not.toBe(true);
});
//============== isObject test end =====================