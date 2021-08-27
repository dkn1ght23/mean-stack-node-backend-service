const multer = require('multer');
const fs = require('fs');
const upload = multer({dest: 'files/'}); //File stored location

let fileUpload = (app) => {

    const multerUpload = upload.single('photo');

    app.post('/upload', multerUpload, (req,res) => {
        console.log(req.file);

        let originalName = req.file.originalname;
        let filename = req.file.filename;
        let currentFilePath = req.file.path;
        let dest = req.file.destination;

        fs.rename(currentFilePath, dest + filename + originalName, (error) => {
            if(error){
                res.send('file upload fail');
            }
            else{
                res.send('file upload complete');
            }
        });

    })
}
let Upload = (app) => {
    fileUpload(app);
}

module.exports = fileUpload;