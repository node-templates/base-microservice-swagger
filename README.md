# base-microservice-swagger
![Travis-CI Build](https://travis-ci.org/node-templates/base-microservice-swagger.svg?branch=master)
![Prod Dependencies](https://david-dm.org/node-templates/base-microservice-swagger/status.svg)
![Dev Dependencies](https://david-dm.org/node-templates/base-microservice-swagger/dev-status.svg)

## Node.js Swagger REST API Starter Pack
This Github repository is intended as a Node.js starter pack for people wishing to create REST
API's using the [Swagger](http://swagger.io) contract-first declaration language. The anatomy 
of this project is:

* /contracts/api.yml - __Swagger API Definition__
* /src/controllers/  - __API Method Implementation__

The orchestration of this is done using the Apigee127 package '[swagger-tools](https://github.com/apigee-127/swagger-tools).
The example implementation contains a simple /add operation that shows how to wire up
a service. 

A more in-depth explanation of how the wire-up of Swagger API calls to your controller methods work
can be found [here](https://github.com/apigee-127/swagger-tools/blob/master/docs/QuickStart.md).

Additional concepts being demonstrated include:

* Build chain as-per the below (Chai, ESDoc, ESlint, Istanbul, Mocha et-al)
* REST API Unit-Testing with [supertest](https://npmjs.org/package/supertest)

## Starting up the API
The steps to get up and running are:

* Run the following commands

        npm install
        node index

* Point your browser to http://localhost:10010/
    
At runtime dynamic clients can read the Swagger metadata from http://localhost:10010/api-docs and
the full Swagger-UI interactive testing page can be found at http://localhost:10010/docs

## Licencing
This repository, like all templates in [our GitHub Org](https://github.com/node-templates) is
MIT licensed. That means you can use it freely without restriction or attribution. If this
helped you get started, give the repo a star on GitHub and help spread the word.

## What this Pack Includes
The starter pack currently features the following tools and techniques:

- Code Coverage Analysis (Package: [istanbul](https://github.com/gotwarlost/istanbul) / [gulp-istanbul](https://github.com/SBoudrias/gulp-istanbul))
- Documentation Generation (Package: [esdoc](https://github.com/esdoc/esdoc)/[gulp-esdoc](https://github.com/nanopx/gulp-esdoc))
- Standards Enforcement (Package: [eslint](https://github.com/eslint/eslint)/[gulp-eslint](https://github.com/adametry/gulp-eslint)
    - Special nod to [Airbnb](https://github.com/airbnb/javascript/) for their coding standards ruleset.
- Unit Testing with:
    - [Chai](https://github.com/chaijs/chai) (BDD Style Assertions)
    - [Mocha](https://github.com/mochajs/mocha) (Test Runner)
    - [Supertest](https://npmjs.org/package/supertest)

These are all validated and working on NodeJS 4.x and above, we test for multiple
variations of node which can be seen in our .travis.yml

If you are looking to create an _application_ then please use one of the
other project templates from [our GitHub Org](https://github.com/node-templates)
which will be better suited, this will include:

- MVC Web Applications
- Swagger Based REST Microservices
- And others.

## Getting Started
To get started, please do the following:

* Create a fork of our repository into your own workspace or organisation 
    (this way you can track improvements and updates as we make them).
* Replace this README.md file with your own project-specific content.
* Update package.json to give your app it's own unique identity and version.
* If you aren't using VSCode, then you can also drop the .vscode directory, 
which defines some IDE options to make sure the standards for tabs and spacing
are used.

Then it's as simple as:

        npm install
        gulp

## Other Commands
The following gulp tasks are defined:

* gulp *docs* - Regenerate esdoc documentation.
* gulp *lint* - Run ESLint validation of code standards. 
    - You can also lint-lib or lint-tests to look at specific areas.
* gulp *test* - Run unit tests.

## But you aren't using package X!
It's a big ecosystem: with each library and template the intent is to show one
of the best, most widely accepted ways to achieve the outcome. If you've got a
suggestion to change to another module, we welcome pull requests as long as they
are prefaced with some discussion. 
