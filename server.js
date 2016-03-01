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

app.get('/playlists', (req, res) => {
  models.Playlist.findAll().then((playlists) => {
    res.send(playlists);
  });
});

app.get('/invoices', (req, res) => {
  models.Invoice.findAll({
      attributes: { exclude: 'CustomerId' },
      include: {
        model: models.Customer,
        attributes: { exclude: [
          'CustomerId',
          'SupportRepId'
        ] }
      }
    })
    .then(invoices => res.send(invoices));
});

app.get('/albums', (req, res) => {
  models.Album.findAll({
      attributes: { exclude: ['ArtistId'] },
      include: {
        model: models.Artist,
        attributes: { exclude: ['ArtistId'] }
      }
    })
    .then(albums => res.send(albums));
});

app.get('/customers', (req, res) => {
  models.Customer.findAll()
    .then(customers => res.send(customers));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
