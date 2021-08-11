let primaryRoute = (app, prefix) => {
    let path = prefix? `${prefix}` : '';
    app.get(`${path}/`, (req,res) => {
        res.send('Welcome to mean stack backend service')
    })
}

module.exports = primaryRoute;