/* global AdCollection, AdListView, AddRantView, RantCollection, RantListView, UserModel, UserView */

if (!$) {
  console.error('Failed to load jQuery dependency.');
  document.body.innerHTML = '<h1>Sorry! An error occurred loading the application. Please try again.</h1>';
}

$(function() {
  'use strict';

  console.log('I feel a rant coming on.');

  var ads = new AdCollection();
  var rants = new RantCollection();
  rants.user = new UserModel();

  var adList = new AdListView({
    el: $('#ads'),
    collection: ads
  });

  var userView = new UserView({
    el: $('#user'),
    model: rants.user
  });

  var addRant = new AddRantView({
    el: $('#add-rant'),
    collection: rants
  });

  var timeline = new RantListView({
    el: $('#timeline'),
    collection: rants
  });

  rants.user.fetch();
  rants.fetch();

});
