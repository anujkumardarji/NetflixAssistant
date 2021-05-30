module.exports = async function(app){
    
    app.get('/',(req,res)=>{
        res.render('index')
    })

}