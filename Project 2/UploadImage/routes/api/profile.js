const express = require( 'express' );
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const url = require('url');
const router = express.Router();

/**
 * PROFILE IMAGE STORING STARTS
 */
const s3 = new aws.S3({
    accessKeyId: 'AKIAWIEJHW4HADTBAP2O',
    secretAccessKey: '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',
    Bucket: 'www.timonimagewebsite.com'
   });

// /**
//  * Single Upload
//  */
// const profileImgUpload = multer({
//     storage: multerS3({
//      s3: s3,
//      bucket: 'timonimagebucket',
//      acl: 'public-read',
//      key: function (req, file, cb) {
//       cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
//      }
//     }),
//     limits:{ fileSize: 10000000 },
//     fileFilter: function( req, file, cb ){
//      checkFileType( file, cb );
//     }
// }).single('profileImage');

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType( file, cb ){
const filetypes = /jpeg|jpg|png|gif/;
const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
const mimetype = filetypes.test( file.mimetype );
if( mimetype && extname ){
    return cb( null, true );
    } else {
        cb( 'Error: This image is not an accepted format. Please submit only images with jpeg, jpg, png or gif extensions.' );
    }
}

// /**
//  * @route POST api/profile/business-img-upload
//  * @desc Upload post image
//  * @access public
//  */
//  router.post( '/profile-img-upload', ( req, res ) => {
//     profileImgUpload( req, res, ( error ) => {
//     if( error ){
//         console.log( 'errors', error );
//         res.json( { error: error } );
//     } else {//no file found
//         if( req.file === undefined ){
//             console.log( 'Error: No File Selected' );
//             res.json( 'Error: No File Selected' );
//         } else {//success
//             const imageName = req.file.key;
//             const imageLocation = req.file.location;
//             res.json({
//                         image: imageName,
//                         location: imageLocation
//                 });
//             }
//         }
//     });
// });

// Multiple File Uploads ( max 4 )
const uploadsBusinessGallery = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'www.timonimagewebsite.com',
		acl: 'public-read',
		key: function (req, file, cb) {
			cb( null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
		}
	}),
	limits:{ fileSize: 10000000 },
	fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
}).array( 'galleryImage', 4 );
/**
 * @route POST /api/profile/multiple-file-upload
 * @desc Upload business Gallery images
 * @access public
 */
router.post('/multiple-file-upload', ( req, res ) => {
	uploadsBusinessGallery( req, res, ( error ) => {
		console.log( 'files', req.files );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.files === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
				// If Success
				let fileArray = req.files,
					fileLocation;
				const galleryImgLocationArray = [];
				for ( let i = 0; i < fileArray.length; i++ ) {
					fileLocation = fileArray[ i ].location;
					console.log( 'filenm', fileLocation );
					galleryImgLocationArray.push( fileLocation )
				}
				// Save the file name into database
				res.json( {
					filesArray: fileArray,
					locationArray: galleryImgLocationArray
				});
			}
		}
	});
});

  module.exports = router;