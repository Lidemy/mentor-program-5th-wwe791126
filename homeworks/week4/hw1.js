const request = require('request')

const API_ENDPOINT = 'https://lidemy-book-store.aherokuapp.com'

request(`${API_ENDPOINT}/books?_limit=10`, (err, res, body) => {
  if (err) {
    console.log('請求錯誤', err)
    return
  }

  if (res.statusCode >= 200 || res.statusCode < 300) {
    console.log('錯誤的 狀態碼 :', res.statusCode)
    return
  }

  let data
  try {
    data = JSON.parse(body)
  } catch (err) {
    console.log(err)
    return
  }
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].id} ${data[i].name}`)
  }
})
