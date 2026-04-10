const db = require("../config/databases");

class Student {
    // model view data
    static getAll(callback){
        // Query select
        const sql = "SELECT * FROM students";
        db.query(sql, callback);
    }
    // model view data by ID
    static getById(id, callback){
        const sql = "SELECT * FROM students WHERE student_id = ?";
        db.query(sql, [id], callback);
    }

    // model insert data
    static create(data, callback){
        const sql = `
            INSERT INTO students (full_name, birth_date, gender, class_id, photo)
            VALUES (?, ?, ?, ?, ?)
        `;
        db.query(sql, [
            data.full_name,
            data.birth_date,
            data.gender,
            data.class_id,
            data.photo
        ], callback);
    }
    // model update data
    static update(id, data, callback){
        const sql = `
            UPDATE students
            SET full_name = ?, birth_date = ?, gender = ?, class_id = ?, photo = ?
            WHERE student_id = ?
        `;
        db.query(sql, [
            data.full_name,
            data.birth_date,
            data.gender,
            data.class_id,
            data.photo,
            id
        ], callback);
    }

    // model delete data
    static delete(id, callback){
        const sql = "DELETE FROM students WHERE student_id = ?";
        db.query(sql, [id], callback);
    }
}

module.exports = Student;