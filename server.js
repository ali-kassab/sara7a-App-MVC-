import express from 'express'
import { DBconnection } from './DBconnection/connection.js'
import { homeRouter } from './src/home/home.route.js'
import { registerRouter } from './src/register/register.route.js'
import { loginRouter } from './src/login/login.route.js';
import { messageRouter } from './src/message/message.route.js';
import { userRouter } from './src/user/user.route.js';
import session from 'express-session';
import mongooSession from 'connect-mongodb-session'
import flash from 'connect-flash'
const app = express()
const port = 3000

const MongoDBStore = mongooSession(session);
let store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/sara7aApp_MVC',
    collection: 'mySessions'
});
app.use(session({
    secret: 'asdfgh',
    // cookie: {
    //   maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    // },
    store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: false,
    saveUninitialized: false
}));
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
})

app.use(flash())
app.use(express.static('public'))  // to allow frontend to access files in backend
app.use(express.urlencoded({ extended: true })) //to allow to etend data that sent to server
app.use(homeRouter)
app.use(registerRouter)
app.use(loginRouter)
app.use(messageRouter)
app.use(userRouter)
DBconnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))