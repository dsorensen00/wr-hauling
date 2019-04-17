x//from website https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0

//Generate Token using secret from process.env.JWT_SECRET
var jwt = require(‘jsonwebtoken’);
function generateToken(user) {
  //1. Dont use password and other sensitive fields
  //2. Use fields that are useful in other parts of the     
  //app/collections/models
  var u = {
   name: user.name,
   username: user.username,
   admin: user.admin,
   _id: user._id.toString(),
   image: user.image
  };
  return token = jwt.sign(u, process.env.JWT_SECRET, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}


 

//signin route
router.post(‘/users/signin’, function(req, res) {
  User
  .findOne({username: req.body.username})    <-- Check username
  .exec(function(err, user) {
        if (err) throw err;
        if (!user) {
            return res.status(404).json({
               error: true,
               message: ‘Username or Password is Wrong’
             });
        }
      bcrypt.compare(req.body.password, user.password, <-- check pwd         
        function(err, valid) {
          if (!valid) {
           return res.status(404).json({
                   error: true,
                   message: ‘Username or Password is Wrong’
             });
          }

        var token = utils.generateToken(user); <-- Generate token
        user = utils.getCleanUser(user);
        res.json({
           user: user,    <--- Return both user and token
           token: token
         });
       });
   });
});

//re-authenticate route//get current user from token
router.get(‘/me/from/token’, function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
   return res.status(401).json({message: ‘Must pass token’});
  }
// Check token that was passed by decoding token using secret
 jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err) throw err;
   //return user using the id from w/in JWTToken
    User.findById({
    ‘_id’: user._id
    }, function(err, user) {
       if (err) throw err;
          user = utils.getCleanUser(user); 
         //Note: you can renew token by creating new token(i.e.    
         //refresh it)w/ new expiration time at this point, but I’m 
         //passing the old token back.
         // var token = utils.generateToken(user);
        res.json({
            user: user, <--- return both user and token
            token: token
        });
     });
  });
});

//token for protected routes
//middleware that checks if JWT token exists and verifies it if it does exist.
//In all the future routes, this helps to know if the request is authenticated or not.
app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next(); //if no token, continue

  token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Please register Log in using a valid email to submit posts'
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});