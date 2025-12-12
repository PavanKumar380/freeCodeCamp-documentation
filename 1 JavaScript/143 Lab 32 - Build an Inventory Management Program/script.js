let inventory = [];

function findProductIndex (name) {
  let ind = -1;
  for (let item of inventory) {
    if (item["name"] == name.toLowerCase()) {
      return inventory.indexOf(item);
    }
  }
  return ind;
}

function addProduct (prod) {
  prod["name"] = prod["name"].toLowerCase();
  let i = findProductIndex(prod["name"]);
  if (i === -1) {
    inventory.push(prod);
    console.log(`${prod["name"]} added to inventory`);
  } else {
    inventory[i]["quantity"] += prod["quantity"];
    console.log(`${prod["name"]} quantity updated`);
  }
}

function removeProduct (name, quant) {
  name = name.toLowerCase();
  let i = findProductIndex(name);
  if (i === -1) {
    console.log(`${name} not found`);
    return;
  } else if (inventory[i]["quantity"] < quant) {
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[i]["quantity"]}`);
  } else if (inventory[i]["quantity"] >= quant) {
    inventory[i]["quantity"] -= quant;
    console.log(`Remaining ${name} pieces: ${inventory[i]["quantity"]}`);
  }
  if (inventory[i]["quantity"] === 0) {
    inventory.splice(i, 1);
  }
}