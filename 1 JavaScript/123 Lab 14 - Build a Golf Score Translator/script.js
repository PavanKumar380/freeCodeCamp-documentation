const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, num) {
  if (num === 1) {
    return names[0];
  }
  if (num - par <= -2) {
    return names[1];
  } else if (num - par < 3) {
    return names[num - par + 3];
  } else {
    return names[6];
  }
}