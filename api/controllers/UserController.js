/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  /* e.g.
    action: function(req, res){
  
    }
  */
  
  hasAccount: function(req, res) {

      Auth.findOne( { email: req.query.email } )
          .then( function ( auth ) {
              if ( auth )
                  return res.ok( 'found user' );
              else
                  return res.notFound( 'no such user' );

          } )
          .catch( function ( err ) {
              return res.error( err );
          } );
  }

  
            

  
});