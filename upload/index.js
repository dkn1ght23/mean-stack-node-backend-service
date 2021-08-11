let fileUpload = (app) => {
    app.get('/upload', (req,res) => {
        res.send('Upload complete');
    })
}
let Upload = (app) => {
    fileUpload(app);
}

module.exports = fileUpload;