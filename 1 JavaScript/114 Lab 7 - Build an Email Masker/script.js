function maskEmail(email) {
  let maskedEmail = "";
  let at = email.indexOf("@");
  maskedEmail += email[0] + "*".repeat(at - 2) + email.slice(at - 1);
  return maskedEmail;
}

let email = "example@email.com";
console.log(maskEmail(email));