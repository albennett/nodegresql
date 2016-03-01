'use strict';

const express = require('express');

// const Genre = require('./models/').Genre;
// const MediaTypes = require('./models/').MediaTypes;
const models = require('./models/');
// const { Genre, MediaTypes } = require('./models/');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'Success'
  });
});

app.get('/genres', (req, res) => {
  models.Genre.findAll().then((genres) => {
    res.send(genres);
  });
});

app.get('/mediatypes', (req, res) => {
  models.MediaType.findAll().then((types) => {
    res.send(types);
  });
});

app.get('/artists', (req, res) => {
  models.Artist.findAll().then((artists) => {
    res.send(artists);
  });
});

app.get('/playlist', (req, res) => {
  models.Playlist.findAll().then((playlist) => {
    res.send(playlist);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});