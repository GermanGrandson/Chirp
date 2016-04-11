var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  if(req.method === "GET"){
    //contineu to the next middleware or request handler
    return next();
  }
  if(!req.isAuthenticated()){
    //user not authenticated redirect to login page
    return res.redirect('/#login');
  }
})
/* GET home page. */
// router.get('/posts', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.route('/posts')
  //returns all posts
  .get(function(req, res){
      //temporary solution
      res.send({message: 'TODO return all posts'});
  })

  .post(function(req, res){
      //temporary solution
      res.send({message: 'TODO Create a new post'});
  });

router.route('/posts/:id')

  //create posts for id's
  .put(function(req, res){
      res.send({message: 'TODO modify post with ID ' + req.params.id});
  })

  .get(function(req, res){
      res.send({message: 'TODO return post with ID ' + req.params.id});
  })

  .delete(function(req, res){
    res.send({message: 'TODO delete a post with ID ' + req.params.id})
  })


module.exports = router;
