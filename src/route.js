'use strict';
module.exports = function(app) {
    var api = require('./api');

    app.route('/tv')
        .get(api.home);
}