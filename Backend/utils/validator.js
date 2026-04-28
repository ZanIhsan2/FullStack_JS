function validateStudent(data){
    if(!data.full_name){
        return "Full Name Wajib diisi";
    }
    if(!data.birth_date){
        return "Birth Date Wajib diisi";
    }
    if(!data.gender){
        return "Gender Wajib diisi";
    }
    if(data.class_id && isNaN(data.class_id)){
        return "class_id harus angka";
    }
    return null;
}
function validatedId(id){
    if(!id || isNaN(id)){
        return "Id Tidak Valid";
    }
    return null;
}

function validateFile(file) {
    if(!file) return null;

    const allowedTypes = ["image/jpeg", "image/png"];
    if(!allowedTypes.includes(file.mimetype)) {
        return "format file harus JPG atau PNG";
    }

    if(file.size > 2 * 1024 * 1024) {
        return "Ukuran file maksimal 2MB";
    }

    return null;
}

module.exports = {validateStudent, validatedId, validateFile};