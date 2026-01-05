import { connection } from "../data/users.js"

export async function insertUser(user) {
    const result = await connection.query(`
        insert into users(username,password)
        values('${user.username}','${user.password}')
`)
return result
}

export async function selectAll(){
    const result = await connection.query(`
        select * from users
        `)
        return result[0]
}

export async function selectById(id){
    const result = await connection.query(`
        select * from messages where id = ${id}
        `)
        return result[0]
}