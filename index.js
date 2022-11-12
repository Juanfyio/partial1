const user_routes = require('./user_routes');

const app_routes= (app) => {
/* http://localhost:3000/api/v1/users */
    app.use('/api/v1/users', user_routes);
};

module.exports = app_routes;