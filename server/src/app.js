let express = require('express')
const app = express()

// app.get('/status', function (req,res){
//     res.send('Hello nodejs server')
// })

app.get('/status', function (req,res){
    console.log('----------------------');
    console.log(req);
    console.log('----------------------');
    res.send('Hello nodejs server');

})

app.get('/showmyname', function (req,res){
    res.send('Nawaporn Srisomran')
})

app.get('/hello/:person', function (req,res){ 
    console.log('hello - ' + req.params.person) 
    res.send('say hello with ' + req.params.person) 
})

app.get('/user/:userID',function(req,res){
    res.send('see user data')
})

app.get('/users',function(req,res){
    res.send('call users data all')
})

// app.get('/pow2/:answer', function (req,res){ 
//     console.log('2 pow - ' + req.params.answer) 
//     res.send('2 pow 2 = ' + req.params.answer) 
// })

let port = 8080

app.listen(port,function(){
    console.log('server running on  ' + port)
})