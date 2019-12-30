const {Pool} = require('pg');

const connectionString = 'postgresql://postgres:12344321@localhost:5432/evmake_test'

exports.pool = new Pool({
    connectionString : connectionString,
});