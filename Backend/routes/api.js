const express = require("express");
const router = express.Router();

const authController = require('../controllers/AuthController'); //mengimport controller auth
const StudentController = require('../controllers/StudentController'); //mengimport controller student

const auth = require('../middleware/authMiddleware'); //mengimport middleware auth
const autorhize = require('../middleware/authorizeMiddleware');

// AUTH     
router.post("/register", (req, res)=>authController.register(req, res)); //route untuk register
router.post("/login", (req, res)=>authController.login(req, res)); //route untuk login

// STUDENT PROTECTED
router.get("/students", auth, (req, res) => StudentController.index(req, res)); //route untuk mendapatkan semua data student, hanya bisa diakses oleh user yang sudah login
router.get("/students/:id", auth, (req, res) => StudentController.show(req, res)); //route untuk mendapatkan data student berdasarkan id, hanya bisa diakses oleh user yang sudah login

// hanya admin
router.post("/students", auth, autorhize("admin"), (req, res) => StudentController.store(req, res)); //route untuk mendapatkan semua data student, hanya bisa diakses oleh admin
router.put("/students/:id", auth, autorhize("admin"), (req, res) => StudentController.update(req, res)); //route untuk mendapatkan data student berdasarkan id, hanya bisa diakses oleh admin
router.delete("/students/:id", auth, autorhize("admin"), (req, res) => StudentController.destroy(req, res)); //route untuk mendapatkan data student berdasarkan id, hanya bisa diakses oleh admin

module.exports = router; 