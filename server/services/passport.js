const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token: ', accessToken);
        console.log('refresh token: ', refreshToken);
        console.log('profile: ', profile);

        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                // we already have a record with the given profile ID
                done(null, existingUser);
            } else {
                // we don't have a record with the given profile ID
                new User({ googleId: profile.id })
                    .save()
                    .then((user) => done(null, user));
            }
        });
    })
);
