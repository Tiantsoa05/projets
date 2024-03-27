import { createConnection } from 'mysql'

const database = createConnection(
    {
        host:"localhost",
        user:"root",
        password:"jossuca",
        database:"employer"
    }
)
export default database