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
    console.log('params：list、read,、delete,、create , update')
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
  request.delete(`${API_ENDPOINT}/books/${id}`, (err) => {
    if (err) {
      return console.log('刪除失敗', err)
    }
    console.log('刪除成功')
  })
}
// 新增POST
function createBook(bookname) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      bookname
    }
  },
  (err) => {
    if (err) {
      return console.log('新增失敗', err)
    }
    console.log('新增成功')
  })
}
// 新增update
function updateBook(id, bookname) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      bookname
    }
  },
  (err) => {
    if (err) {
      return console.log('變更失敗', err)
    }
    console.log('變更成功')
  })
}
