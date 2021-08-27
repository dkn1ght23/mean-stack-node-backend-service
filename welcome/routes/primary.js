let primaryRoute = (app, prefix) => {
    let path = prefix? `${prefix}` : '';
    app.get(`${path}/`, (req,res) => {
        res.json({
            Message: 'Welcome to mean stack backend service',
            Success: true
        })
    })
}

module.exports = primaryRoute;