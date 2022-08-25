const Midterm = require('./controllers/Midterm1-65')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user', UserController.put)
    
    app.delete('/user', UserController.remove)
    
    app.get('/user', UserController.show)
    
    app.get('/users', UserController.index)

    app.post('/add1', Midterm.add1)

    app.post('/multiply', Midterm.multiply)

    app.post('/LCM', Midterm.LCM)

}