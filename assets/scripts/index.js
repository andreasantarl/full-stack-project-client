'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example.js');

const authEvents = require('./apiActions/authActions/events.js');
const gameEvents = require('./apiActions/gameActions/events.js');
const playerEvents = require('./apiActions/playerActions/events.js');
const teamEvents = require('./apiActions/teamActions/events.js');
const goalEvents = require('./apiActions/goalActions/events.js');
const assistEvents = require('./apiActions/assistActions/events.js');
const attendanceEvents = require('./apiActions/attendanceActions/events.js');
const postEvents = require('./apiActions/postActions/events.js');
const helpersEvents = require('./helpers.js');

// const bookEvents = require('./books/book-events.js');

$('.signed-in').hide();
$('.signed-out').show();
$('#admin-status-title').hide();

$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
  playerEvents.addHandlers();
  teamEvents.addHandlers();
  goalEvents.addHandlers();
  assistEvents.addHandlers();
  attendanceEvents.addHandlers();
  postEvents.addHandlers();
  helpersEvents.addHandlers();

  teamEvents.onPageLoad();
});
