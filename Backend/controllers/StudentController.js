const Student = require("../models/Student");

// Memanggil 2 Function untuk mengambil data dan menampilkan data berdasarkan id
const { validateStudent, validatedId } = require("../utils/validator");
const errorHandler = require("../utils/errorHandler");

class StudentController {

    // Get All
    index (req, res){
        Student.getAll((err, results) => {
            if (err) {
                return errorHandler(res, err, 500, "Gagal ambil data");
            }
            res.json({
                succes: true,
                message: "Berhasil ambil semua data",
                data: results
            });
        });
    }

    // Get By ID
    show(req, res){
        const {id} = req.params;

        const error = validateId(id);
        if(error){
            return errorHandler(res, error, 400, error);
        }
        Student.getById(id, (err, results) => {
            if(err){
                return errorHandler(res, err, 500, "Terjadi kesalahan");
            }
            if(results.length === 0){
                return errorHandler(res, "Not Found", 404, "Data tidak ditemukan");
            }
            res.json({
                success: true,
                message: "Detail student",
                data: results[0]
            });
        });
    }

    // CREATE
    store (req, res) {
        const data = req.body;

        // validasi data
        const error = validateStudent(data);
        if(error){
            return errorHandler(res, error, 400, error);
        }

        // validasi file
        const fileError = validateFile(req.file);
        if(fileError){
            return errorHandler(res, fileError, 400, fileError);
        }

        // set photo
        data.photo = req.file.filename;

        Student.create(data, (err) => {
            if(err){ 
                return errorHandler(res, err, 500, "Gagal tambah data");
            }
            res.status(201).json({
                succes: true,
                message: "Data berhasil ditambahkan",
                data: data
            });
        });
    }
    // Update
    update (req, res) {
        const {id} = req.params;
        const data = req.body;

        const idError = validateId(id);
        if(idError){
            return errorHandler(res, idError, 400, idError);
        }
        const bodyError = validateStudent(data);
        if(bodyError){
            return errorHandler(res, bodyError, 400, bodyError);
        }

        // hanya validasi jika ada file
        if(req.file) {
            const fileError = validateFile(req.file);
            if(fileError){
                return errorHandler(res, fileError, 400, fileError);
            }

            data.photo = req.file.filename;
        }

        Student.update(id, data, (err) => {
            if(err){
                return errorHandler(res, err, 500, "Gagal update data");
            }
            res.json({
                succes: true,
                message: "Data berhasil diupdate",
            });
        });
    }

    // Delete
    destroy (req, res) {
        const { id } = req.params;
        const error = validateId(id);
        if(error){
            return errorHandler(res, error, 400, error);
        }
        Student.delete(id, (err) => {
            if(err){
                return errorHandler(res, err, 500, "Gagal hapus data");
            }
            res.json({
                succes: true,
                message: "Data berhasil dihapus"
            });
        });
    }
}

module.exports = new StudentController();