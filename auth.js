const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '764740751219-qa2j7tsocq4krpe6234ofq0oq0p40dim.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {    
      return done(null, profile);    
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});