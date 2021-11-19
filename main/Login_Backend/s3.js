const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')
const today = new Date();
const bucketName = "www.timonimagewebsite.com"
const region = "us-east-2"
const accessKeyId = "AKIAWIEJHW4HNTXF5ARB"
const secretAccessKey = "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"
/////////////////////////////////////
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})
//upload the image
function uploadImage(image) {
  const fileStream = fs.createReadStream(image.path)
  const uploadDetails = {
    Bucket: bucketName,
    Body: fileStream,
    Key: image.imagename,
    Metadata: {DATE: today.toLocaleDateString("en-US")}
  }
  return s3.upload(uploadDetails).promise()
}

exports.uploadImage = uploadImage
//download the image
function getFileStream(imageKey) {
  const downloadDetails = {
    Key: imageKey,
    Bucket: bucketName
  }
  return s3.getObject(downloadDetails).createReadStream()
}

exports.getFileStream = getFileStream