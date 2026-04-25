const db = require('../config/databases');

class User {
    static findByEmail(email, callback) {
        const sql = "SELECT * FROM users WHERE email = ?";
        db.query(sql, [email], callback);
    }

    static create(data, callback) {
        const sql = `
            INSERT INTO users (email, password) 
            VALUES (?, ?)
        `;
        db.query(sql, [data.email, data.password, data.role], callback);
    }
}

module.exports = User;