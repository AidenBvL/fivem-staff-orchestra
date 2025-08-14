const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const connection = require('./database');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  connection.query('SELECT * FROM Users WHERE id = ?', [id], (err, results) => {
    if (err) return done(err);
    done(null, results[0]);
  });
});

passport.use(new DiscordStrategy({
  clientID: 'DISCORD_CLIENT_ID',
  clientSecret: 'DISCORD_CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/discord/callback',
  scope: ['identify']
}, (accessToken, refreshToken, profile, done) => {
  connection.query('SELECT * FROM Users WHERE discord_id = ?', [profile.id], (err, results) => {
    if (err) return done(err);
    if (results.length > 0) return done(null, results[0]);
    const user = { discord_id: profile.id, username: profile.username };
    connection.query('INSERT INTO Users SET ?', user, (err) => {
      if (err) return done(err);
      done(null, user);
    });
  });
}));
