const multer = require('multer');
const fs = require('fs');
const upload = multer({dest: 'files/'}); //File stored location
const express = require('express');

let fileUpload = (app) => {

    const multerUpload = upload.single('photo');

    app.post('/upload', multerUpload, (req,res) => {
        console.log(req.file);

        let originalName = req.file.originalname;
        let filename = req.file.filename;
        let currentFilePath = req.file.path;
        //let dest = req.file.destination;

        //NEW PATH IN A LINE
        let newFilePath = `files/${originalName}`;

        fs.rename(currentFilePath, newFilePath, (error) => {
            if(error){
                res.send('file upload fail');
            }
            else{
                res.send('file upload complete');
            }
        });

    })
}

let filePreview = (app) => {
    app.use('/images', express.static('files/'));
}

let Upload = (app) => {
    fileUpload(app);
    filePreview(app);
}

module.exports = Upload;