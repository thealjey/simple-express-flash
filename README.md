# simple-express-flash
*A simple ExpressJS flash middleware*

This middleware adds a dead simple flash method to the request object and makes it also available inside your templates.

### Install

    npm i simple-express-flash --save
### Configure

    import express from 'express';
    import session from 'express-session';
    import flash from 'simple-express-flash';
    
    express()
      .use(session({
        resave: false,
        saveUninitialized: false,
        secret: 'my keyboard cat was replaced by a dog'
      }))
      .use(flash);
### And use

    app.use(function (req) {
      /**
       * Store a message
       * @param {string} key
       * @param {string} message
       * @returns {string[]} a collection of set messages
       */
      req.flash('key', 'message text');
       
      /**
       * Retrieve an array of messages by key, removing them from storage
       * (such is the nature of flash messages, they disappear in a "flash")
       * @param {string} key
       * @returns {string[]}
       */
      req.flash('key');
       
      /**
       * Retrieve all messages
       * @example
       * // returns {key: ['message text']}
       * @returns {Object}
       */
      req.flash();
    });
The exact same function can be used inside of your templates

    each message in flash('error')
      .alert.alert-danger(role='alert')= message
