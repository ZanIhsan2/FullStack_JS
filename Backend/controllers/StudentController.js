const Student = require("../models/Student");

class StudentController {

    // Get All
    index (req, res){
        Student.getAll((err, results) => {
            if (err) {
                return res.json({
                    message: "Gagal Ambil data"
                });
            }
            res.json({
                message: "Berhasil Ambil data",
                data:results
            });
        });
    }

    // Get By ID
    show(req, res){
        const {id} = req.params;

        Student.getById(id, (err, results) => {
            if(err){
                return res.json({message: "Data tidak ditemukan"});
            }

            res.json({
                message: "Detail Student",
                data: results[0]
            });
        });
    }

    // CREATE
    store (req, res) {
        const data = req.body;

        Student.create(data, (err) => {
            if(err){
                return res.json({message: "Gagal Menambahkan data"});
            }

            res.json({
                message: "Data berhasil ditambahkan",
                data: data
            });
        });
    }
    update (req, res) {
        const {id} = req.params;
        res.send(`Mengubah data students ${id}`);
    }

    destroy (req, res) {
        const {id} = req.params;
        res.send(`Menghapus data students ${id}`);
    }
}

const object = new StudentController();

module.exports = object;