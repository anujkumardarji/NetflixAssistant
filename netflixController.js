module.exports = function(app){
    var bodyParser = require('body-parser')
    var urlencodedParser = bodyParser.urlencoded({extended:false})

    app.get('/',(req,res)=>{
        res.render('index')
    })

}