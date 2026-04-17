const errorHandler = (res, error, status = 500, message = "Terjadi kesalahan") => {
    console.log(error); // Untuk log

    return res.status(status).json({
        success: false,
        message: message,
        error: error?.message || error
    });

};

module.exports = errorHandler;