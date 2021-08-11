const routeInitialization = require('./routes');

let Welcome = (app, route_prefix) => {
    routeInitialization(app, route_prefix);
}

module.exports = Welcome;