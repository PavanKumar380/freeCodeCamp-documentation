function convertHTML (str) {
  let conArr = [];
  for (const ch of [...str]) {
    switch (ch) {
      case "&": conArr.push("&amp;");
      break;
      case "<": conArr.push("&lt;");
      break;
      case ">": conArr.push("&gt;");
      break;
      case '"': conArr.push("&quot;");
      break;
      case "'": conArr.push("&apos;");
      break;
      default: conArr.push(ch);
    }
  }
  return conArr.join("");
}