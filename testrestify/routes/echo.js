module.exports.getEcho = function(req, res, next) {
    console.log('dentro do router');
    res.send(200, {});
    if(next) next();
}
