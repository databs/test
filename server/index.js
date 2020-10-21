// Import
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const mysql = require('mysql')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const multer = require('multer')
const path = require('path')

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/gambar/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 100000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb)
  }
}).single('file')

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null,true)
  }else {
    cb('Error: Image Only!')
  }
}

// Set Middleware
middleware = (req, res, next) => {
  if (!middleware == true) {
    console.log('Cannot Access')
  }else {
    console.log('Access');
    next()
  }
}

//Auth Key
const md5 = require('md5')
const Cryptr = require('cryptr')
const { NEWDECIMAL } = require('mysql/lib/protocol/constants/types')
const cryprt = new Cryptr('27030312348')

// Koneksi database
const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

// Important!!!
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(middleware)
app.use(express.static('./public'))
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Login
app.post('/login', (req, res) => {

    let data = [
        req.body.email,
        md5(req.body.password)
    ]
    const datalogin = 'SELECT id,nama_teknisi,email,jabatan,negara,image FROM teknisi WHERE email = ? AND password = ?'
    db.query(datalogin, data, (err, result) => {
      if(err) throw err
      if (result.length > 0){
        let headerJWT = {
            algorithm : "HS256",
            expiresIn : "1h"
        }
        let verifySignature = "spbutelkom"
        let payload = {data}
        res.json({
          massage: 'Logged',
          token: jwt.sign(payload, verifySignature, headerJWT),
          data: result[0]
        })
      } else {
        res.json({
          massage: 'Invalid Email/Password'
        })
      }
    })
})

// Get Profile
app.get('/profile/:id', (req, res) => {
  const id  = req.params.id
  const data = 'select id,nama_teknisi,email,jabatan,negara,image from teknisi WHERE id = ?'
  db.query(data, [id], (err, result) => {
    if (err) throw err
    res.json(result)
  })
})


// VerifyToken
verifyToken = (req, res, next) => {
    let headers = req.headers.authorization
    let token = null
    if (headers != null) {
      token = headers.split(" ")[1]
    }

    if(token == null){
      res.json({
        massage: 'Unauthorized'
      })
    }else {
      let headerJWT = {
            algorithm: "HS256"
        }
      let verifySignature = "spbutelkom"
      jwt.verify(token,verifySignature,headerJWT, (err) => {
        if (err) {
          res.json({
            invalid: true,
            message: 'Invalid or Expired Token'
          })
        }else {
          next()
        }
      })
    }
}

// Upload data Image
app.patch('/upload/:id', (req, res) => {
  upload(req, res, (err) => {
    if (err) throw err
    const id = req.params.id
    const image = req.file.filename
    const dataimage = `UPDATE teknisi SET image = ? WHERE id = ?`
    db.query(dataimage, [image, id], (err, result) => {
      if (err) {
        res.json({
          msg: err
        })
      }else {
        if (result == undefined) {
          res.json({
            msg: 'Error: No File Selected!'
          })
        }else {
          res.json({
            msg: 'File Uploaded!',
            file: `uploads/${req.file.filename}`
          })
        }
      }
    })
  })
})

// Tampil Data
app.get('/api/tampildata', verifyToken, (req, res) => {
    const tampilData = 'SELECT * FROM report'
    db.query(tampilData, (err, result) => {
      console.log(result)
      res.send(result)
    })
})

// Delete Data
app.delete('/api/deletedata/:id', (req, res) => {
    const id = req.params.id
    const deletedata = 'DELETE FROM report WHERE id = ?'
    db.query(deletedata, id, (err, result) => {
        if (err) throw err;
        // ini response nya
        res.send("data berhasil dihapus")
    })
})

// update data tampil
app.get('/api/tampil/:id', (req, res) => {

  const id = req.params.id

  const getData = 'SELECT * FROM report WHERE id = ?'
  db.query(getData, [id], (err, result) => {
    console.log(result)
    return res.json(result[0])
  })
})

// Edit Data
app.put('/api/update/:id', (req, res) => {
    const id = req.params.id
    const timestamp = req.body.timestamp
    const nama_pelaksana = req.body.nama_pelaksana
    const nik = req.body.nik
    const sumberwo = req.body.sumberwo
    const no_spbu = req.body.no_spbu
    const kerusakan = req.body.kerusakan
    const tindakan = req.body.tindakan
    const dll = req.body.dll
    const tanggal = req.body.tanggal
    const status = req.body.status

    const updatedata = `UPDATE report SET timestamp = ? ,nama_pelaksana = ?, nik = ?, sumberwo = ?,no_spbu = ?,kerusakan = ?,tindakan = ?,dll = ?,tanggal = ?,status = ? WHERE id = ${id}`
    db.query(updatedata, [timestamp,nama_pelaksana,nik,sumberwo,no_spbu,kerusakan,tindakan,dll,tanggal,status], (err, result) => {
        console.log(err)
        return res.json(result[0])
    })
})


// Post Data
app.post('/api/tambah', (req, res) => {

    const timestamp = req.body.timestamp
    const nama_pelaksana = req.body.nama_pelaksana
    const nik = req.body.nik
    const sumberwo = req.body.sumberwo
    const no_spbu = req.body.no_spbu
    const kerusakan = req.body.kerusakan
    const tindakan = req.body.tindakan
    const dll = req.body.dll
    const tanggal = req.body.tanggal
    const status = req.body.status

    const tambahData = 'INSERT INTO report (timestamp,nama_pelaksana,nik,sumberwo,no_spbu,kerusakan,tindakan,dll,tanggal,status) VALUES (?,?,?,?,?,?,?,?,?,?)'
    db.query(tambahData, [timestamp,nama_pelaksana,nik,sumberwo,no_spbu,kerusakan,tindakan,dll,tanggal,status], (err, result) => {
        console.log(err)
        return res.json(result[0])
    })
})

app.get('/', (req, res) => {
    res.json('Server Aktif')
})

// app.get('/', (req, res) => {
//     db.query('SELECT * FROM spbu', (err, rows) => {
//         if (err) throw err
//         res.send(rows)
//     })
// })

app.listen(3001, () => {
    console.log('Server Aktif')
})
