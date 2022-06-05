const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"saqib91012",
    host:"localhost",
    port:"5432",
    database:"studentbook"
})
module.exports = pool;