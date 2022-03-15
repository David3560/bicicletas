const express = require('express');
const session = require("express-session");
const passport = require('passport');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');


require('./auth');

function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401);
}
const app = express()
app.use(session({
    secret: 'secretkey',
    resave: true,//Add this line
    saveUninitialized: true,//Add this line 
}))
// app.use(session({ secret: "cats"}));
app.use(passport.initialize());
app.use(passport.session());


const db = require ('./db')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const rutas =  require('./routes/rutas')
app.use(rutas)

const eventos =  require('./routes/eventos')
app.use(eventos)

const competencias =  require('./routes/competencias')
app.use(competencias)

const bicicletas =  require('./routes/bicicletas')
app.use(bicicletas)

app.use(express.urlencoded({extended:true}))
app.use(cookieParser('mi secreto'));



app.get('/', (req, res)=>{
    res.render('login');
})

//autenticacion con google 
app.get('/home', isLoggedIn, (req, res)=>{
    res.render('home');
})


app.get('/auth/google', 
    passport.authenticate('google', { scope: ['email', 'profile'] } )
);

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect:'/home', 
        failureRedirect: '/auth/failure'
    })
);

app.get('/auth/failure', (req, res)=>{
    res.send('something went wrong..');
});

app.get('/protected', isLoggedIn, (req, res) =>{
    res.send(`Hello ${req.user.displayName}`);
})

app.get('/logout', (req, res)=>{
    req.logout();
    req.session.destroy();
    res.render('login');
})
        

app.listen(3000, ()=>{
    console.log('¡server UP! en http://localhost:3000')
})