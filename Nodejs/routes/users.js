module.exports = app=>{
    app.get('/users',(req,res)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({
            users: [{
                    name: 'Andrews',
                    email: 'andrews@gmail.com',
                    id: 5
                }]
            })
    })
    app.post('/users',(req,res)=>{
        res.json(req.body)
    })
}