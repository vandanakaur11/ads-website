import bcrypt from "bcrypt";

export async function hashPassword(password) {
    return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password, hashePassword) {
    return await bcrypt.compare(password, hashePassword);
}
