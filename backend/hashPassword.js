import bcrypt from "bcryptjs";

const password = "admin123"; // Your chosen password
const hashPassword = async () => {
  const hashed = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashed);
};

hashPassword();
//password event head - eventhead1
//super admin- admin123
