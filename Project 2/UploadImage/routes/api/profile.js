const express = require( 'express' );
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const url = require('url');
const router = express.Router();

const s3 = new aws.S3({
    accessKeyId: 'AKIAWIEJHW4HIM6PIHFL',
    secretAccessKey: 'UBg6GWOdFqbaB/sbipJtgNiKfZhwygsNROv3tMg1A',
    Bucket: 'timonimagebucket'
   });

const profileImgUpload = multer({
    storage: multerS3({
     s3: s3,
     bucket: 'timonimagebucket',
     acl: 'public-read',
     key: function (req, file, cb) {
      cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
     }
    }),
    limits:{ fileSize: 10000000 },
    fileFilter: function( req, file, cb ){
     checkFileType( file, cb );
    }
}).single('profileImage');

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType( file, cb ){
const filetypes = /jpeg|jpg|png|gif/;
const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
const mimetype = filetypes.test( file.mimetype );if( mimetype && extname ){
    return cb( null, true );
    } else {
    cb( 'Error: This image is not an accepted fromat. Please submit only images with jpeg, jpg, png or gif extensions.' );
    }
}

/**
 * @route POST api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */
 router.post( '/profile-img-upload', ( req, res ) => {profileImgUpload( req, res, ( error ) => {
    if( error ){
     console.log( 'errors', error );
     res.json( { error: error } );
    } else {//no file found
     if( req.file === undefined ){
      console.log( 'Error: No File Selected' );
      res.json( 'Error: No File Selected' );
     } else {//success
      const imageName = req.file.key;
      const imageLocation = req.file.location;
      res.json({
       image: imageName,
       location: imageLocation
      });
     }
    }
   });
  });

  module.exports = router;