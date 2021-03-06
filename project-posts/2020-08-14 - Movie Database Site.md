---
title: "Movie Database"
date: "2020-08-01"
teaser: "/projects/movieDB.png"
excerpt: "Movie Database site with the most popular movies and search functionality"
author: "Sebastian Golbert"
link: "https://sgolbert-movie-challenge.vercel.app/"
---

This website shows the most popular movies of [TMDB](https://www.themoviedb.org/) grouped by category. It has been bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

A live version of the site can be found [here](https://sgolbert-movie-challenge.vercel.app/).

The source code can be found [here](https://github.com/SGolbert/sgolbert-movie-challenge).

### Introduction

TMDB is a movie database open to the public through a REST API. Developers around the world can sign up, get a API key for free and then query the database in different ways.

This website uses the API to get the following kinds of data:

- List of genres
- List of movies by genre
- Single movie details
- List of movies by a text search query

Each type of data is used by a different page, as explained in the following section.

### Pages

All the pages share a common layout consisting of header, main content and footer. In the header there are links to the homepage, an about page and also a search field for a movie title. This setup makes the app behave like a single page, giving a good UX.

#### [Index page](https://github.com/SGolbert/sgolbert-movie-challenge/blob/master/pages/index.js)

The index page is used to display the different genres using **pagination**. It is _statically_ generated and therefore will be served very fast by the CDN without making an API call.

Once the user clicks on a genre, he will be taken to the next page: list of movies under that genre.

#### [Movies under a genre page](https://github.com/SGolbert/sgolbert-movie-challenge/blob/master/pages/categories/%5Bcategory_id%5D/%5Bgenre%5D.js)

This page is also _statically_ generated fetching the first ten pages of the list of movies for that genre, ordered by decreasing popularity. It is just as easy to statically generate pages for all the movies of the genre, but that has been left out to avoid taxing the API unnecessarilly.

When a particular movie is clicked, the user will be taken to the movie's details.

#### [Movie detail page](https://github.com/SGolbert/sgolbert-movie-challenge/blob/master/pages/movies/%5Bmovie_id%5D.js)

This pages shows a series of characteristics about the movie, including the language, release date and release poster. This page is _server rendered_, to show Next.js SSR capabilities and also avoid taxing the API just for demo purposes. However, if the underlying data is stable it would be beneficial both to the users and the host to statically generate the detail pages, as that will guarantee only one API call per movie as opposed to thousands of calls for the most popular movies.

#### [Search page](https://github.com/SGolbert/sgolbert-movie-challenge/blob/master/pages/search/%5Bquery%5D.js)

This page searches for movies matching the query in the URL using server-side rendering. When the user uses the search field in the header, she will be redirected here.
It only displays the first page of results in the spirit of being API friendly.

### Testing

Testing is included in the repository by using Jest and react-testing-library. At the moment it consists of snapshot testing of the pages by feeding them with constant input data (no API call).

### State management

The current displayed page in the sliders of the category and movie by category pages is saved in local storage and managed by the useState React hook. The use of Redux for such a simple use case is not recommended.
Another example with Redux can be found [here](https://github.com/SGolbert/expensify-app).

### Styling

The styling has been made with a combination of styled-jsx (the default css-in-js styling solution of Next.js) and a global css file [mvp.css](https://github.com/SGolbert/sgolbert-movie-challenge/blob/master/styles/mvp.css). MVP stands for "Minimum Viable Product" and the stylesheet has been created by [Andy Brewer](https://andybrewer.github.io/mvp/).

The idea behind this approach is to have acceptable css defaults which make prototyping fast. The current state of the website can be considered a MVP.

While the css code is minimal, responsive design principles have been taken into account, so that the website is mobile and tablet friendly.
