const poll = new Map();

function addOption(option) {
  if(!option) {
    return "Option cannot be empty.";
  }
  if(poll.has(option)) {
    return `Option "${option}" already exists.`;
  } else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

addOption("Fami");
addOption("Lil D");
addOption("Makima");
addOption("Yoru");

function vote(option, voterId) {
  if(poll.has(option)) {
    const voters = poll.get(option);
    if (voters.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      voters.add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  } else {
    return `Option "${option}" does not exist.`;
  }
}

vote("Makima", 1);
vote("Makima", 2);
vote("Makima", 3);
vote("Fami", 1);
vote("Fami", 2);
vote("Fami", 3);
vote("Fami", 4);
vote("Fami", 5);
vote("Lil D", 1);
vote("Lil D", 2);
vote("Lil D", 3);
vote("Lil D", 4);
vote("Yoru", 1);
vote("Yoru", 2);
vote("Yoru", 3);
vote("Yoru", 4);
vote("Yoru", 5);
vote("Yoru", 6);

function displayResults() {
  let results = "Poll Results:";
  poll.forEach((val, key) => {
    results += `\n${key}: ${val.size} votes`
  });
  return results;
}

console.log(displayResults());