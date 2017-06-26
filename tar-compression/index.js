const tar = require('tar');
tar.c({
    gzip: true,
    file: "zip_teste.tar.gz" //Destination file
}, [
    "zip_teste"
]).then(function () {
    console.log("Feito carreto");
});