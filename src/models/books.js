const dbConnection = require('../config/database')
const getAllBooks = () => {
    const SQLQuery = 'SELECT * FROM Buku';
    return dbConnection.execute(SQLQuery);    
}

module.exports = {
    getAllBooks
}