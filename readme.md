# Passpill site

This is [the web site of the PassPill project](https://passpill.io/?stay), that aims to share the whole development of a software project.

It's great that you are interested in this app's source code. You are welcome to fork the repo, install it locally and start to play with the code.

## What's inside this repo?
The website uses [Hugo](https://gohugo.io/), a static site generator, to transform its contents written in MarkDown into beautiful HTML pages.

It also uses Gulp to write Sass style rules instead of plain CSS.

## Local installation

First [install Hugo in your computer](https://gohugo.io/getting-started/installing/). We need at least version 0.36.

Then open your terminal and clone the repo
```
$ git clone https://github.com/passpill-io/passpill-site.git
```

The you need to install the dependencies
```
$ cd passpill-site
$ npm install
```

Hugo comes with a development server to reload the browser on any code change. To run it and also watch changes in scss files run:
```
$ npm start
```

Then website will be able in your computer at `http://localhost:1313`.
