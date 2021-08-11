const primary = require('./primary');

let initializeAllRoute = (app, route_prefix) => {
    primary(app, route_prefix);
}

module.exports = initializeAllRoute;