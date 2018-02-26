---
title: Development status
description: What's going on in the PassPill Project development
type: page
---

In this page we will be updating the current status of the app, so if you are new to the project or coming back here you can know what's going on.

## Front-end, the app

The front-end is in its initial stage, and need the user to run a local server to work. But there are some things in place:

* Basic encryption is working.
* It's possible to create, fetch and save the pills.
* You can add passes to the pill.
* Settings are saved and it's connecting to the server defined there.

On the other hand there are many things to work on:

* Pass filtering (search) not working yet.
* Need to add tag support.
* Need to expand information on every field and on how to use the app.
* The router needs to be explained, and create a screen stack.


## Back-end

The back-end is even in a earlier stage than the front-end. It's not online because we want it to use a nice web service to provide the API, like AWS Lambda functions and DynamoDB, but nothing is decided in this matter.

However there is a node.js server working in the repo, and it provides the API that the app needs to store the pills.

Right now every pill is being store in is own file, that is how the FileAdapter work to store them in the local file system.

We want to support most of the common cloud computing services via adapters, and we would like to provide serverless config files to make the installation easy.


## The site

In the repo we have a Hugo static site with styles cloned from [the Elate theme](https://github.com/saey55/hugo-elate-theme).

The site was created in a hurry to publish the project so it still have a lot of the styles and scripts used by Elate. We need to make a big clean up.

It only contains one page (the main one) and there is a need of creating inner pages (like this one), to create experiments, so we need to create styles for them.
