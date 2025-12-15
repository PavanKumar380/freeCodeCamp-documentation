function checkKeys(ob1, ob2) {
  for (const key in ob2) {
    if (ob1[key] !== ob2[key]) {
      return false;
    }
  }
  return true;
}

const whatIsInAName = (arr, obj) => arr.filter(ar => checkKeys(ar, obj));