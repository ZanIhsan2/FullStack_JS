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

module.exports = {validateStudent, validatedId};