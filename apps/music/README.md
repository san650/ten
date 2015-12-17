# Music

Search and listen to music

## Desired features

* Show a list of albums
* Show album's tracks
* Search for albums
* Search for tracks
* Fetch albums data

## Useful services

You can use this [custom API](https://em-ng-workshop.herokuapp.com/api/albums)
to retrieve albums and tracks.

### Albums API

* List of albums: https://em-ng-workshop.herokuapp.com/api/albums
* Album details: https://em-ng-workshop.herokuapp.com/api/albums/:album_id
* Album tracks: https://em-ng-workshop.herokuapp.com/api/albums/:album_id/tracks

## Seed

Here's a list of books in a simple JSON format that will help you get started.

```json
{
  "albums": [
    {
      "id": 1000,
      "artist": "Ramones",
      "name": "Ramones",
      "image": "/images/ramones-ramones.jpg",
    },
    {
      "id": 1001,
      "artist": "Ramones",
      "name": "Leave Home",
      "image": "/images/ramones-leave-home.jpg"
    },
    {
      "id": 1002,
      "artist": "Ramones",
      "name": "Rocket to Russia",
      "image": "/images/ramones-rocket-to-russia.jpg",
      "links":
    }
  ]
}
```
