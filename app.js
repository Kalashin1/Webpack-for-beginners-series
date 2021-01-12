var express = require('express');
var upload = require('express-fileupload');

const app = express();
app.use(upload())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/form.html');
})

app.post('/', (req, res)=>{
    if(req.files){
        console.log(req.files);
        var file = req.files.file;
        var fileName = file.name;

        file.mv('./uploads/'+fileName, (err)=>{
            if(err){
                console.log(err)
            }else{
                res.send('File uploaded')
            }
        })
    }
})

app.listen(3000, ()=>{
    console.log('App running on port 3000')
})