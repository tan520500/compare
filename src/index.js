const compare = (function(){

    //判断数组bigArr是否包含数组smallArr
    const isContain = (bigArr,smallArr) => {
        const bigSet = new Set(bigArr);
        const smallSet = new Set(smallArr);
        for(let item of smallSet ) {
            if(!bigSet.has(item)) {
                return false;
            }
        }
        return true;
    }
    
    //判断是否为非null的对象或数组
    const isObject = (obj) => {
        return typeof obj === "object" && obj !== null;
    }
    
    
    
    const compare = (source,target) => {
        if(!isObject(source) || !isObject(target)) {
            throw new Error("arguments must be object or array!")
        }
        const keys1 = Object.keys(source);
        const keys2 = Object.keys(target);
        if(!isContain(keys1,keys2)) {
            return false;
        }
        for(let key of keys2) {
            //如果为为非null的对象或数组，则递归调用，否则直接判断是否相等
            if(isObject(source[key]) && isObject(target[key])) {
                let temp = compare(source[key],target[key]);
                if (!temp) {
                    return false;
                };
                break;
            }
            if(source[key] !== target[key]) {
                return false;
            }
        }
        return true;
        
    };
    
    return compare;
    
    })();
    
    const btn1 = document.querySelector("#test1");
    const btn2 = document.querySelector("#test2");
    
    btn1.addEventListener("click",func1);
    btn2.addEventListener("click",func2);
    
    
    function func1() {
        const source1= {a:2,b:3,c:[{item:23}]};
        const target1= {b:3,c:[{item:23}]};
        const testName1 = "test1:";
        console.log(testName1,compare(source1,target1));
    }
    
    function func2() {
        // const source2= [{item:23,index:222}];
        // const target2= [{item:23,tip:"好像有那里不对"}];
    
        // const source2= {id:1,name:'test',updatedAt:'now'};
        // const target2_1= {name:'test'};
        // const target2_2= {name:'anotherTest'};
        // const testName2 = "test2:";
        // console.log(testName2,compare(source2,target2_1));
        // console.log(testName2,compare(source2,target2_2));
    
    
    //深度比较：
        // const object = {
        //     id: 1,
        //     name: 'test',
        //     product: {
        //         id: 1,
        //         name: 'product'
        //     },
        //     updatedAt: 'now'
        // };
        // const objectA = {
        //     name: 'test',
        //     product: {
        //         name: 'product'
        //     }
        // };
        // const objectB = {
        //     name: 'test',
        //     product: {
        //         name: 'anotherProduct'
        //     }
        // };
    
        // console.log(compare(object,objectA));
        // console.log(compare(object,objectB));
    
        // //比较数组:
        // const array = [{
        // id: 1,
        // name: 'test',
        // product: {
        // id: 1,
        // name: 'product'
        // },
        // updatedAt: 'now'
        // }];
        // const arrayA = [{
        // name: 'test',
        // product: {
        // name: 'product'
        // }
        // }];
        // const arrayB = [{
        // name: 'test',
        // product: {
        // name: 'anotherProduct'
        // }
        // }];
        // console.log(compare(array, arrayA)) // return true
        // console.log(compare(array, arrayB)) // return false
    
        //Object 中嵌套 Array：
        const object = {
        id: 1,
        name: 'test',
        products: [{
        id: 1,
        name: 'product'
        }],
        updatedAt: 'now'
        };
        const objectA = {
        name: 'test',
        products: [{
        name: 'product'
        }]
        };
        const objectB = {
        name: 'test',
        products: [{
        name: 'anotherProduct'
        }]
        };
        console.log(compare(object, objectA)) // return true
        console.log(compare(object, objectB)) // return false
    }