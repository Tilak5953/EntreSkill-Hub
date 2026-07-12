/**
 * JWT Token Generator Utility
 * -- Tilak Kumar
 */

const jwt = require('jsonwebtoken');

/**
 * Generate a signed JWT for the given user ID
 * @param {String} id - MongoDB user _id
 * @returns {String} Signed JWT string
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = generateToken;
