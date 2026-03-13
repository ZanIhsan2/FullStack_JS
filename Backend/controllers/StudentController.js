class StudentController {

    index (req, res){
        const data = {
            message: "Menampilkan data students",
            data: []
        }
        res.json(data);
    }
    
    store (req, res) {
        const data = {
            message: "Menyimpan data students",
            data: req.body
        }
        res.json(data);
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