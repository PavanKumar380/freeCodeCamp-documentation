const steamrollArray = arr => {
  return arr.reduce((ar, cur) => {
    if(Array.isArray(cur)) {
      ar.push(...steamrollArray(cur));
      return ar;
    } else {
      ar.push(cur);
      return ar;
    }
  }, []);
}