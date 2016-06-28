'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onCreateGame = (event) => {
  event.preventDefault();
  $('#createGameModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

const onShowGames = (event) => {
  event.preventDefault();
  $('#page-title').text('Games');

  $('.standings').hide();
  $('.games').show();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();
  $('.points').hide();

  api.show()
  .done(ui.showGamesSuccess)
  .fail(ui.failure);
};

const onDeleteGame = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");
  api.destroy(data)
  .done(ui.deleteGameSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame);
  $('#games-button').on('click', onShowGames);
  $(document).on('click', '.game-delete-button', onDeleteGame);
};

module.exports = {
  addHandlers,
  onShowGames,
  onCreateGame,
  onDeleteGame
};
