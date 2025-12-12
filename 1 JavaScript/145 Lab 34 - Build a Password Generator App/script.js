function generatePassword (n) {
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()", len = pool.length;
  let pwd = "";
  for (let i = 0 ; i < n ; i++) {
    pwd += pool[Math.round(Math.random() * (len - 1))];
  }
  return pwd;
}

const password = generatePassword(12);
console.log(`Generated password: ${password}`);