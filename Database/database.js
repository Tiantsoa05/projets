import { createConnection } from 'mysql'

const database = createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"employer"
    }
)
export default database