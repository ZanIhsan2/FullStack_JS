const StudentController = require('../controllers/StudentController') //mengimport controller student

const express = require("express")
const router = express.Router()

router.get('/', (req, res) => { //req => untuk menerima request, res => untuk mengirim response
    res.send('Hello Express');
});

// Deklarasi route untuk students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router; 