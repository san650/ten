# Reading list

Track the novels and books you want to read.

## Desired features

* Track the books I want to read
* Track the books I already read
* Track the books I need to buy
* Group the books by author
* Group the books by year of publishing
* Search by author
* Search by title
* Fetch book metadata

## Useful services

You can use [Open Library](https://openlibrary.org/) to retrieve books and
authors metadata and image covers.

You can play with the [API sandbox](https://openlibrary.org/api_sandbox) to
learn how to use it.

### Search API

The search API allows you to look books and authors by diferent criterias.

https://openlibrary.org/dev/docs/api/search

### Image cover API

The image cover API allows you to look for book covers and author avatars.

https://openlibrary.org/dev/docs/api/covers

### Books API

Once you know the books identifier you can retrieve the full metadata of the
book using the books API.

https://openlibrary.org/dev/docs/api/books

## Seed

Here's a list of books in a simple JSON format that will help you get started.

```json
{
  "books": [
    {
      "OCLC": 35022004,
      "title": "Microserfs",
      "publication_date": "1995",
      "author": "Douglas Coupland"
    },
    {
      "OCLC": 34818133,
      "title": "Do Androids Dream of Electric Sheep?",
      "publication_date": "1968",
      "author": "Philip K. Dick"
    },
    {
      "OCLC": 67871286,
      "title": "Ubik",
      "publication_date": "1969",
      "author": "Philip K. Dick"
    },
    {
      "OCLC": 47677622,
      "title": "Lord of the Flies",
      "publication_date": "1955",
      "author": "William Golding"
    },
    {
      "OCLC": 19811474,
      "title": "I, Claudius",
      "publication_date": "1934",
      "author": "Robert Graves"
    },
    {
      "LCCN": 60007847,
      "title": "To Kill a Mockingbird",
      "publication_date": "1960",
      "author": "Harper Lee"
    },
    {
      "OCLC": 7956273,
      "title": "All the King’s Men",
      "publication_date": "1946",
      "author": "Robert Penn Warren"
    }
  ]
}
```

### About book identifiers

Books can have different identifiers depending on several factors so you should
have this in mind when designing a model and the search functionalities.

Most common identifiers are ISBN10, ISBN13, OCLC and LCCN but there are others,
the best strategy is to support all of them and use the ones that are available
for each book.
