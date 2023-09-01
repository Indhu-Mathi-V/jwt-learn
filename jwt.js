//JWT stands for "JSON Web Token." It is a compact and self-contained way to securely transmit information between parties as a JSON object. JWTs are often used for authentication and authorization purposes in web applications and APIs.
// They are commonly used in scenarios where a user needs to prove their identity to access a resource.

//A JWT consists of three parts:

//1.Header: Contains metadata about the type of token and the signing algorithm used.

//2.Payload: Contains the claims, which are statements about an entity (typically the user) and additional data. Claims can be categorized into three types:

//3.Registered Claims: These are predefined claims recommended by the JWT specification, such as "iss" (issuer), "sub" (subject), "exp" (expiration time), "nbf" (not before), and more.
//Public Claims: These are custom claims that are defined by the parties involved in the communication.
//Private Claims: These are custom claims that are agreed upon between parties and are not meant to be standardized.

//Signature: To ensure the integrity of the token, a digital signature is generated using the header, payload, a secret key (known only to the server), and a chosen algorithm. This signature is included in the JWT and can be verified by the recipient to ensure that the token has not been tampered with.

const jwt = require('jsonwebtoken');

// Secret key to sign and verify tokens
const secretKey = '1234567';

// Example payload with user information
const payload = {
  user_id: 123,
  username: 'indhu',
};

// Create a JWT
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

console.log('Generated JWT:', token);

try {
  // Verify and decode the JWT
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded Payload:', decoded);
} catch (error) {
  if (error.name === 'TokenExpiredError') {
    console.log('Token has expired.');
  } else {
    console.log('Invalid token:', error.message);
  }
}
