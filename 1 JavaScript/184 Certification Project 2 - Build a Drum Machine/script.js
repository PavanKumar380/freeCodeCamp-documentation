const disp = document.getElementById('display');

const padArr = [
  {
    name: 'heater-1',
    track: 'Q',
    desc: 'Heater 1'
  },
  {
    name: 'heater-2',
    track: 'W',
    desc: 'Heater 2'
  },
  {
    name: 'heater-3',
    track: 'E',
    desc: 'Heater 3'
  },
  {
    name: 'heater-4',
    track: 'A',
    desc: 'Heater 4'
  },
  {
    name: 'clap',
    track: 'S',
    desc: 'Clap'
  },
  {
    name: 'open-hh',
    track: 'D',
    desc: 'Open HH'
  },
  {
    name: 'kick-n-hat',
    track: 'Z',
    desc: "Kick n' Hat"
  },
  {
    name: 'kick',
    track: 'X',
    desc: 'Kick'
  },
  {
    name: 'closed-hh',
    track: 'C',
    desc: 'Closed HH'
  }
];

const pads = padArr.map(pad => document.getElementById(pad.name));

const tracks = padArr.map(pad => document.getElementById(pad.track));

function tapPad(index) {
  tracks[index].play();
  disp.textContent = padArr[index].desc;
}

pads.forEach(pad => pad.addEventListener("click", () => tapPad(pads.indexOf(pad))));

document.addEventListener("keydown", function(event) {
  const keyTap = event.key.toUpperCase();
  const index = padArr.findIndex(pad => pad.track === keyTap);
  pads[index].click();
});