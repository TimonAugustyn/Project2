const express = require('express')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { uploadImage, getFileStream } = require('./s3')
const app = express()
/////////////////////////////////////
app.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)
  readStream.pipe(res)
})
/////////////////////////////////////
app.post('/images', upload.single('image'), async (req, res) => {
  const image = req.file
  console.log(image)
  const result = await uploadImage(image)
  await unlinkFile(image.path)
  console.log(result)
  const description = req.body.description
  res.send({imagePath: `/images/${result.Key}`})
})

app.listen(5000, () => console.log("listening on port 5000"))