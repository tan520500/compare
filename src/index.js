// export const compare = (function(){

//     //判断数组bigArr是否包含数组smallArr
//     const isContain = (bigArr,smallArr) => {
//         const bigSet = new Set(bigArr);
//         const smallSet = new Set(smallArr);
//         for(let item of smallSet ) {
//             if(!bigSet.has(item)) {
//                 return false;
//             }
//         }
//         return true;
//     }
    
//     //判断是否为非null的对象或数组
//     const isObject = (obj) => {
//         return typeof obj === "object" && obj !== null;
//     }
    
    
    
//     const compare = (source,target) => {
//         if(!isObject(source) || !isObject(target)) {
//             throw new Error("arguments must be object or array!")
//         }
//         const keys1 = Object.keys(source);
//         const keys2 = Object.keys(target);
//         if(!isContain(keys1,keys2)) {
//             return false;
//         }
//         for(let key of keys2) {
//             //如果为为非null的对象或数组，则递归调用，否则直接判断是否相等
//             if(isObject(source[key]) && isObject(target[key])) {
//                 let temp = compare(source[key],target[key]);
//                 if (!temp) {
//                     return false;
//                 };
//                 break;
//             }
//             if(source[key] !== target[key]) {
//                 return false;
//             }
//         }
//         return true;
        
//     };
    
//     return compare;
    
// })(); 


//判断数组bigArr是否包含数组smallArr
export const isContain = (bigArr,smallArr) => {
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
export const isObject = (obj) => {
    return typeof obj === "object" && obj !== null;
}



export const compare = (source,target) => {
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