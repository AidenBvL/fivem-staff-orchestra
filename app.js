const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const staffRoutes = require('./routes/staff');
const calendarRoutes = require('./routes/calendar');
const playerRoutes = require('./routes/player');
const gameRoutes = require('./routes/game');
const panelRoutes = require('./routes/panel');
require('./config/database');
require('./config/passport');

const app = express();
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/staff', staffRoutes);
app.use('/calendar', calendarRoutes);
app.use('/player', playerRoutes);
app.use('/game', gameRoutes);
app.use('/panel', panelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
