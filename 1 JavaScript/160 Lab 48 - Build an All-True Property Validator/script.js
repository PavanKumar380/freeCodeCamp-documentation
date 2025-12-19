const checkNum = (ob, pr) => ob[pr] == false || isNaN(ob[pr]) || ob[pr] === null || !ob.hasOwnProperty(pr);

const checkReg = (ob, pr) => (ob[pr] == false || ob[pr] === null || !ob.hasOwnProperty(pr)) && (typeof ob[pr] !== "object");

const truthCheck = (collection, pre) => !(collection.some(obj => typeof obj[pre] === "number") ? collection.some(obj => checkNum(obj, pre)) : collection.some(obj => checkReg(obj, pre)));