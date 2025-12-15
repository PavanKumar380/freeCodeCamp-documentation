function truthCheck(collection, pre) {
  let val = true;
  let isNum = 0;
  for (const ob of collection) {
    if (typeof ob[pre] === "number") {
      isNum = 1;
      break;
    }
  }
  if (!isNum) {
    for (const ob of collection) {
      if((ob[pre] == false || ob[pre] === null || !ob.hasOwnProperty(pre)) && (typeof ob[pre] !== "object")) {
        val = false;
      }
    }
  } else {
    for (const ob of collection) {
      if(ob[pre] == false || isNaN(ob[pre]) || ob[pre] === null || !ob.hasOwnProperty(pre)) {
        val = false;
      }
    }
  }
  return val;
}