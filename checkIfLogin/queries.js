import { connection } from "../data/users.js"

export async function selectByUsername(username) {
    const result = await connection.query(`
        select * from users where username like '${username}'
    `)
    return result[0][0]
}