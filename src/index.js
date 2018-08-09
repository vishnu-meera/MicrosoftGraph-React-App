import 'babel-polyfill';
import exp from 'express';
import {OIDCStrategy } from 'passport-azure-ad'
import passport from 'passport';
import renderHelper from './helper/renderHelper';
import createStore from './helper/createStore';
import {matchRoutes} from 'react-router-config';
import Routes from '../src/client/routes';
import uuid from 'uuid';

const users = {};
const app = exp();
const creds         =  {
    redirectUrl: 'http://localhost:3002/tokenForGraph',
    clientID: 'e80eb675-7c39-442a-aba3-ebb1d3f5fb27',
    clientSecret: 'vwqzUEKA290%bbvCHE08]%(',
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
    allowHttpForRedirectUrl: true, // For development only
    responseType: 'code',
    validateIssuer: false, // For development only
    responseMode: 'query',
    scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite']
}

passport.use(new OIDCStrategy(creds, (iss, sub, profile, accessToken, refreshToken, done) => {
    done(null, { profile,accessToken,refreshToken});
}));

passport.serializeUser((user, done) => {
    const id = uuid.v4();
    users[id] = user;
    done(null, id);
});

passport.deserializeUser((id, done) => {
    const user = users[id];
    done(null, user);
});

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(exp.static('public'));

app.get('/tokenForGraph',passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),(req, res) => {
    let session = req.session;
    session.bearetToken =  req.user.accessToken;
    console.log("/tokenForGraph")
    res.redirect('/')
});

app.get('/logout',(req, res) => {
    let session = req.session;
    session.bearetToken =  '';
    console.log("/logout")
    res.redirect('/')
});

app.get('*',(req,res)=>{
    const store = createStore(req);
    let token = req.session.bearetToken;
    console.log("Path: ", req.path)

    const promises = matchRoutes(Routes,req.path).map(({route})=>{
        return route.loadData ? route.loadData(store,token):null;
    }).map(promise=>{
        if(promise){
            return new Promise((resolve,reject)=>{
                promise.then(resolve).catch(resolve)
            })
        }
    })

    Promise.all(promises).then(()=>{
        const context = {};
        const content = renderHelper(req,store,context);
        if(context.notFound)
            res.status(404);
        res.send(content);
    });

});

app.listen(3002,()=>{
    console.log("listening on port 3002")
});
