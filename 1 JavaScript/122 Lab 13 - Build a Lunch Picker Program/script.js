let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if(arr.length > 0) {
    let poppedItem = arr.pop();
    console.log(`${poppedItem} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  if(arr.length > 0) {
    const shiftedItem = arr.shift();
    console.log(`${shiftedItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  if(arr.length > 0) {
    const rnd = Math.floor(Math.random() * arr.length);
    const rndItem = arr[rnd];
    console.log(`Randomly selected lunch: ${rndItem}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    const [first, second, third, ...rest] = arr;
    if (rest.length > 0) {
      console.log(`Menu items: ${first}, ${second}, ${third}, ${rest}`);
    } else {
      console.log(`Menu items: ${first}, ${second}, ${third}`);
    }
  } else {
    console.log("The menu is empty.");
  }
}