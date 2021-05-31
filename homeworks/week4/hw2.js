const request = require('request') // 引入request  library

const args = process.argv
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'

const commands = args[2]
const params = args[3]

// 製作需要的功能 讀取某一id 新增POST、刪除DELETE、修改PATCH

switch (commands) {
  case 'list':
    listAllbook()
    break
  case 'read':
    readBook(params)
    break
  case 'delete':
    deleteBook(params)
    break
  case 'create':
    createBook(params)
    break
  case 'update':
    updateBook(params, args[4])
    break
  default:
    console.log('可執行指令：list、read,、delete,、create , update')
}
// 列出所有的書
function listAllbook() {
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }

    let books
    try {
      books = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }

    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i].id} ${books[i].name}`)
    }
  })
}
// 讀取某 id
function readBook(id) {
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (res.statusCode === 404) {
      return console.log(`沒有這本 ${id} 書籍`)
    }

    if (err) {
      return console.log('讀取失敗', err)
    }
    let book
    try {
      book = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    console.log(book.id, book.name)
  })
}
// 刪除某id
function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (res.statusCode === 404) {
      return console.log(`Not ${id} BookData , Please Check`)
    }

    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log(`成功刪除 ${id} 的 BookData`)
    }
  })
}
// 新增POST
function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name
    }
  },
  (err, res, body) => {
    try {
      console.log(`${name}新增成功`)
    } catch (err) {
      return console.log('新增失敗', err)
    }
  })
}
// 新增update
function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name
    }
  },
  (err, res, body) => {
    if (err) {
      return console.log('error')
    }

    if (res.statusCode === 404) {
      return console.log(`找尋不到 ${id} 的書本資料！請確認有此書籍`)
    }
  })
}
