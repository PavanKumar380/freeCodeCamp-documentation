function translatePigLatin(base) {
  const regVow = /^[aeiou]/;
  const regVowGlobal = /[aeiou]/g;
  const regCon = /(?<consonants>^[bcdfghjklmnpqrstvwxyz]+)(?<rest>[a-z]+)/;
  if (!base.match(regVowGlobal)) {
    return base + "ay";
  }
  if (base.match(regVow)) {
    return base + "way";
  } else {
    return base.replace(regCon, "$<rest>$<consonants>") + "ay";
  }
}