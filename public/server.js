const express = require("express");
const multer  = require("multer");
  
const app = express();
  
app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});
app.listen(3000);