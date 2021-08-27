

let fileUpload = (app) => {
    app.get('/upload', (req,res) => {
        //console.log(req.params);
        console.log(req.body);
        res.send('Upload complete');
    })
}
let Upload = (app) => {
    fileUpload(app);
}

module.exports = fileUpload;