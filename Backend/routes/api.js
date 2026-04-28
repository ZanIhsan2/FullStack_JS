const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorizeMiddleware');
const upload = require('../middleware/uploadMiddleware');
const express = require('express');
const router = express.Router();

// Authentication routes
router.post("/register", (req, res)=>AuthController.register(req, res));
router.post("/login", (req, res)=>AuthController.login(req, res));

// Student (Protected)
router.get("/students", auth, (req, res)=>StudentController.index(req, res));
router.get("/students/:id", auth, (req, res)=>StudentController.show(req, res));

// hanya admin
// router.post("/students", auth, authorize("admin"), (req, res)=>StudentController.store(req, res));
router.post(
    "/students",
    auth,
    authorize("admin"),
    upload.single("photo"),
    (req, res) =>StudentController.store(req, res)
);

module.exports = router;