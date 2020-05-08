const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');
var port = 3000;

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.VUE_APP_OKTA_ISSUER,
    clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
    assertClaims: {
      aud: 'api://default'
    }
});


console.log('oktaJwtVerifier')
console.log(oktaJwtVerifier)
console.log()
console.log()

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  console.log(`authenticating`)
  console.log()
  const authHeader = req.headers.authorization || '';
  console.log('authHeader');
  console.log(authHeader);
  console.log()
  console.log()
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    console.log("no match")
    return res.status(401).end();
  }

  const accessToken = match[1];
  console.log('access token')
  console.log(accessToken)
  console.groupEnd()
  const expectedAudience = 'api://default';

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      // where does this log to? not logging to console!
      console.log(`Error in application - ${err.message}`)
      res.status(401).send('Unauthorized error - '+ err.message);
    });
}

const app = express();

/**
 * For local testing only!  Enables CORS for all domains
 */
app.use(cors());

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
app.get('/api/messages', authenticationRequired, (req, res) => {
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
      },
      {
        title: 'Title 3',
        body: 'post body 3',
        date:  new Date(),
        text: 'I am a robot.'
      },
      {
        title: 'Title 4',
        body: 'post body 4',
        date:  new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'Hello, world!'
      }
    ]
  });
});

app.get('/api', (req, res) => {
    res.json({
      message: 'This is the API root.  Try adding /messages to your url'
    });
  });

  app.get('/', (req, res) => {
    res.json({
      message: 'This is the API root.  Try adding /api/messages to your url'
    });
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});