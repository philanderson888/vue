/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

 /* This file was obtained at
    https://github.com/okta/samples-nodejs-express-4/edit/master/resource-server/server.js
    by following this tutorial
    https://developer.okta.com/quickstart/#/vue/nodejs/express
    */

const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');
var port = 3000;

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
  issuer: process.env.VUE_APP_OKTA_ISSUER,
  assertClaims: {
    aud:'api//default'
  }
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    res.status(401);
    return next('Unauthorized');
  }

  const accessToken = match[1];
  console.log('accessToken = ' + accessToken)
  const audience = oktaJwtVerifier.assertClaims.aud;
  console.log('audience is ' + audience);
  return oktaJwtVerifier.verifyAccessToken(accessToken, audience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

const app = express();

/**
 * For local testing only!  Enables CORS for all domains
 */
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello!  There\'s not much to see here :) Please grab one of our front-end samples for use with this sample resource server'
  });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'This is the API root.  Try adding \messages to your url'
  });
});

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get('/secure', authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */

app.get('/api/messages', (req, res) => {
  res.json({
    messages: [
      {
        title: 'Title',
        body: 'post body',
        date:  new Date(),
        text: 'I am a robot.'
      },
      {
        title: 'Title 2',
        body: 'post body 2',
        date:  new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'Hello, world!'
      }
    ]
  });
});


// app.get('/api/messages', authenticationRequired, (req, res) => {
//   res.json({
//     messages: [
//       {
//         date:  new Date(),
//         text: 'I am a robot.'
//       },
//       {
//         date:  new Date(new Date().getTime() - 1000 * 60 * 60),
//         text: 'Hello, world!'
//       }
//     ]
//   });
// });

app.listen(port, () => {
  console.log(`Resource Server Ready on port ${port}`);
});
