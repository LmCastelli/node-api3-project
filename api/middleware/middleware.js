const User = require('../users/users-model')

function logger(req, res, next) {
  console.log("hello!");
  console.log(`${req.method} ${req.path}`);
  
  next();
}

function errorHandling(err, req, res, next) { // eslint-disable-line
  res.status(err.status || 500).json({
    message: `Something bad happened: ${err.message}`,
    
  });
}

async function validateUserId(req, res, next) {
  try { 
    const user = await User.getById(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      next({ status:404, message: "user not found" })
    }
  } catch (error) {
    next(error)
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  errorHandling,
  validateUserId,
  validateUser,
  validatePost,
}