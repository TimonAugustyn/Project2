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
function uploadImage(file) {
  const fileStream = fs.createReadStream(file.path)
  const uploadDetails = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
    Metadata: {DATE: today.toLocaleDateString("en-US")}
  }
  return s3.upload(uploadDetails).promise()
}

exports.uploadImage = uploadImage
//download the image
function getFileStream(filekey) {
  const downloadDetails = {
    Key: filekey,
    Bucket: bucketName
  }
  return s3.getObject(downloadDetails).createReadStream()
}

exports.getFileStream = getFileStream