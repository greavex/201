import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import session from 'express-session'
import sessionFileStore from 'session-file-store'

// 需匯入api
import users from './api/users.js'

const app = express()
const FileStore = sessionFileStore(session)
const identityKey = 'skey'

app.use(
  session({
    name: identityKey,
    secret: 'SECRET', // 用來對session id相關的cookie進行簽名
    store: new FileStore(), // 本地儲存session（純文字文件，也可以選擇其他store，例如redis的）
    saveUninitialized: false, // 是否自動儲存未初始化的會話，建議false
    resave: false, // 是否每次都重新儲存會話，建議false
    cookie: {
      maxAge: 30 * 60 * 1000, // 30分鐘 有效期，單位是毫秒
    },
  })
)

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

//app.use('/products', products)
//app.use('/orders', orders)
app.use('/users', users)

// 未找到的錯誤 - 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// 處理其它還未實作的要求 - 501
app.use((err, req, res, next) => {
  res.status(err.status || 501)
  res.json({
    error: {
      code: err.status || 501,
      message: err.message,
    },
  })
})

// 以下為測試restful用的
// app.get('/', (req, res) => {
//   return res.send('Received a GET HTTP method')
// })

// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method')
// })

// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method')
// })

// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method')
// })

export default app
