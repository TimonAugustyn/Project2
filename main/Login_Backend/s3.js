<<<<<<< HEAD
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')
const today = new Date();
const bucketName = "www.timonimagewebsite.com"
const region = "us-east-2"
const accessKeyId = "AKIAWIEJHW4HNTXF5ARB"
const secretAccessKey = "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"

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

//The upload
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
    Metadata: {DATE: today.toLocaleDateString("en-US")}
  }

  return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile


//The download
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
=======
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketName = "www.timonimagewebsite.com"
const region = "us-east-2"
const accessKeyId = "AKIAWIEJHW4HNTXF5ARB"
const secretAccessKey = "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"

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile


// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
>>>>>>> 35cffa1ee2586e0525c2ff41fc98cc3bae63fdd4
exports.getFileStream = getFileStream