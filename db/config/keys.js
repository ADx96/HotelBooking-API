module.exports = {
    const const token = jwt.sign(JSON.stringify(payload), JWT_SECRET),
    exp: Date.now() + parseInt(JWT_EXPIRATION_MS),
  };