module.exports = function (app) {
    app.use('/sigin', require('./sigin'));
    app.use('/home', require('./home'));
    app.use('/inform', require('./inform'));
    app.use('/grade', require('./grade'));
}